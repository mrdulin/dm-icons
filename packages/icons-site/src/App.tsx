import * as icons from '@d-matrix/icons-react';
import { useEffect, useState } from 'react';
import './styles.css';
import { getEMSizeProps } from '@d-matrix/icons-react/utils';
import { ImageSearch } from './ImageSearch';
import { similarityPercent, type ImageMatch } from './icon-search';

const { new: iconsNew, ...legacyIcons } = icons;

const typedLegacyIcons: Record<string, React.ComponentType<React.SVGProps<HTMLSpanElement>>> = legacyIcons;
const typedNewIcons: Record<string, React.ComponentType<React.SVGProps<HTMLSpanElement>>> = iconsNew;

const typedLegacyIconNames = Object.keys(typedLegacyIcons);
const typedNewIconNames = Object.keys(typedNewIcons);

const Colors = ['initial', '#b8cae6', '#F0BB0E', '#D93838', '#000000'];

let CopyTimer: ReturnType<typeof setTimeout> | undefined;

interface IconGridProps {
  names: string[];
  iconMap: Record<string, React.ComponentType<React.SVGProps<HTMLSpanElement>>>;
  color: string;
  opacity: number;
  copiedIconName?: string;
  getCopyText: (iconName: string) => string;
  onCopy: (iconName: string, copyText: string) => void;
  scores?: Map<string, number>;
}

function IconGrid({ names, iconMap, color, opacity, copiedIconName, getCopyText, onCopy, scores }: IconGridProps) {
  return (
    <div style={{ display: 'grid', gridGap: 8, gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
      {names.map((iconName) => {
        const IconComponent = iconMap[iconName];
        const className = ['icon-box'];
        if (copiedIconName === iconName) {
          className.push('copied');
        }
        return (
          <div key={iconName} className={className.join(' ')} onClick={() => onCopy(iconName, getCopyText(iconName))}>
            <div style={{ color, height: 50, fontSize: 36, opacity }}>
              <IconComponent />
            </div>
            <div style={{ fontSize: 12 }}>{iconName}</div>
            {scores?.has(iconName) && <div style={{ fontSize: 12, color: '#1890ff' }}>{similarityPercent(scores.get(iconName)!)}%</div>}
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [color, setColor] = useState<(typeof Colors)[number]>(Colors[0]);
  // Always a string (not undefined): with `value={searchKeyword}` a state of
  // undefined would flip the input to uncontrolled and leave stale text in it.
  const [searchKeyword, setSearchKeyword] = useState('');
  const [copiedIconName, setCopiedIconName] = useState<string>();
  const [iconOpacity, setIconOpacity] = useState(1);
  const [tab, setTab] = useState<'old' | 'new'>('new');
  const [imageSearchOpen, setImageSearchOpen] = useState(false);
  const [imageMatches, setImageMatches] = useState<ImageMatch[]>();

  const copyIcon = (iconName: string, copyText: string) => {
    if (CopyTimer) {
      clearTimeout(CopyTimer);
      CopyTimer = undefined;
    }
    navigator.clipboard.writeText(copyText).then(() => {
      setCopiedIconName(iconName);
      CopyTimer = setTimeout(() => setCopiedIconName(undefined), 2000);
    });
  };

  // Image search: prefer the new-icons tab; only switch to the legacy tab
  // when nothing matched there.
  useEffect(() => {
    if (!imageMatches) return;
    setTab(imageMatches.some((match) => match.group === 'new') ? 'new' : 'old');
  }, [imageMatches]);

  const typedLegacyIconsNamesByKeyword = searchKeyword
    ? typedLegacyIconNames.filter((iconName) => iconName.toLowerCase().includes(searchKeyword.toLowerCase()))
    : typedLegacyIconNames;

  const typedNewIconsNamesByKeyword = searchKeyword
    ? typedNewIconNames.filter((iconName) => iconName.toLowerCase().includes(searchKeyword.toLowerCase()))
    : typedNewIconNames;

  const distanceByName = new Map((imageMatches ?? []).map((match) => [match.name, match.distance]));
  // The two search modes are mutually exclusive: when image matches exist
  // the keyword is guaranteed to be empty, so show the ranked matches as-is.
  const legacyList = imageMatches ? imageMatches.filter((m) => m.group === 'legacy').map((m) => m.name) : typedLegacyIconsNamesByKeyword;
  const newList = imageMatches ? imageMatches.filter((m) => m.group === 'new').map((m) => m.name) : typedNewIconsNamesByKeyword;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 1024 }}>
        <fieldset>
          <legend>容器CSS color:</legend>

          <div style={{ display: 'flex' }}>
            {Colors.map((c) => (
              <div key={c}>
                <input type="radio" value={c} checked={c === color} onChange={() => setColor(c)} />
                <label htmlFor={c}>{c}</label>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>容器CSS 透明度:</legend>

          <div style={{ display: 'flex' }}>
            <input type="number" step="0.1" min="0" max="1" value={iconOpacity} onChange={(e) => setIconOpacity(e.target.valueAsNumber)} />
          </div>
        </fieldset>

        <h2>
          图标列表
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>
            (
            <span>
              version：<i>{VITE_ICONS_REACT_PACKAGE_VERSION}</i>；
            </span>
            {tab === 'old' && (
              <span>
                数量：<i>{legacyList.length}</i>；
              </span>
            )}
            {tab === 'new' && (
              <span>
                数量：<i>{newList.length}</i>；
              </span>
            )}
            <span>
              更新时间：
              <i>{new Date(+BUILD_TIMESTAMP).toLocaleString()}</i>
            </span>
            )
          </span>
        </h2>
        <div style={{ padding: 10 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <input
              style={{ flex: 1, height: 36, padding: '0 10px' }}
              type="search"
              placeholder="在此搜索图标，点击图标可复制代码"
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                // Keyword search and image search are mutually exclusive;
                // typing exits image search, which also clears its matches.
                if (imageSearchOpen) setImageSearchOpen(false);
              }}
            />
            <button
              style={{ height: 36, padding: '0 12px', cursor: 'pointer' }}
              onClick={() => {
                // Opening image search clears the keyword: only one search
                // mode is active at a time.
                setSearchKeyword('');
                setImageSearchOpen((v) => !v);
              }}
            >
              以图找图
            </button>
          </div>
          <ImageSearch open={imageSearchOpen} onMatches={setImageMatches} />
        </div>

        <div style={{ padding: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="tabs-header">
            <input type="radio" name="tabs" id="tab1" className="tab-radio" checked={tab === 'new'} onChange={() => setTab('new')} />
            <label htmlFor="tab1" className="tab-label">
              新图标
            </label>

            <input type="radio" name="tabs" id="tab2" className="tab-radio" checked={tab === 'old'} onChange={() => setTab('old')} />
            <label htmlFor="tab2" className="tab-label">
              旧图标
            </label>
          </div>
          {imageMatches && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 13, color: '#666' }}>以图找图匹配 {imageMatches.length} 个</span>
              <button
                onClick={() => {
                  // "Show all" fully returns to normal browsing: clear the
                  // matches and close the image-search panel.
                  setImageMatches(undefined);
                  setImageSearchOpen(false);
                }}
              >
                显示全部
              </button>
            </div>
          )}
        </div>

        {tab === 'old' && (
          <IconGrid
            names={legacyList}
            iconMap={typedLegacyIcons}
            color={color}
            opacity={iconOpacity}
            copiedIconName={copiedIconName}
            getCopyText={(iconName) => `<icons.${iconName} />`}
            onCopy={copyIcon}
            scores={imageMatches ? distanceByName : undefined}
          />
        )}

        {tab === 'new' && (
          <IconGrid
            names={newList}
            iconMap={typedNewIcons}
            color={color}
            opacity={iconOpacity}
            copiedIconName={copiedIconName}
            getCopyText={(iconName) => `<icons.new.${iconName} />`}
            onCopy={copyIcon}
            scores={imageMatches ? distanceByName : undefined}
          />
        )}

        <h2>图标与文字垂直居中</h2>
        <div>
          <button style={{ fontSize: 14 }}>
            按钮 <icons.RollbackOutlined className="classname-will-be-merged" />
          </button>
        </div>

        <h2>
          覆盖<code>svg</code>元素属性
        </h2>
        <div>
          <icons.TechnologyInnovationSquareOutlined style={{ fontSize: 28 }} />
          <icons.TaxExemptSquareOutlined style={{ fontSize: 28, marginLeft: 2 }} />
          <icons.SpecialSquareOutlined style={{ fontSize: 28, marginLeft: 2 }} />
          <icons.TlacSquareOutlined style={{ fontSize: 28, marginLeft: 2 }} svgProps={{ width: '2em', height: '1em' }} />
          <icons.MarketMakingSquareOutlined style={{ fontSize: 28, marginLeft: 2 }} svgProps={getEMSizeProps({ width: 27, height: 16 })} />
        </div>
        <pre>
          <code>
            {`
            import { getEMSizeProps } from '@d-matrix/icons-react/utils';

            function Component() {
              return <icons.MarketMakingSquareOutlined style={{ fontSize: 28, marginLeft: 2 }} svgProps={getEMSizeProps({ width: 27, height: 16 })} />
            }
          `}
          </code>
        </pre>

        <h2>
          使用<code>Ref</code>
        </h2>
        <pre>
          <code>
            {`
            import { ComponentRef, useRef } from 'react';

            function Component() {
              const iconRef = useRef<ComponentRef<typeof icons.TechnologyInnovationSquareOutlined>>(null);

              return <icons.TechnologyInnovationSquareOutlined ref={iconRef} style={{ fontSize: 28 }} />
            }
          `}
          </code>
        </pre>
      </div>

      <a href="https://github.com/mrdulin/dm-icons" style={{ position: 'fixed', top: 0, right: 0 }}>
        <img
          decoding="async"
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          loading="lazy"
        />
      </a>

      <button
        style={{ position: 'fixed', bottom: 40, right: 40, width: 60, height: 60, background: '#fff', fontSize: 30, cursor: 'pointer' }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <icons.VerticalAlignTopOutlined />
      </button>
    </div>
  );
}

export default App;
