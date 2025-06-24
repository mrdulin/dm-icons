import * as icons from '@d-matrix/icons-react';
import { useState } from 'react';
import './styles.css';

const typedIcons: Record<string, React.ComponentType<React.SVGProps<HTMLSpanElement>>> = icons;

const iconNames = Object.keys(typedIcons);

const Colors = ['initial', '#b8cae6', '#F0BB0E', '#D93838', '#000000'];

let CopyTimer: ReturnType<typeof setTimeout> | undefined;

function App() {
  const [color, setColor] = useState<(typeof Colors)[number]>(Colors[0]);
  const [searchKeyword, setSearchKeyword] = useState<string>();
  const [copiedIconName, setCopiedIconName] = useState<string>();

  const iconsNamesByKeyword = searchKeyword
    ? iconNames.filter((iconName) => iconName.toLowerCase().includes(searchKeyword.toLowerCase()))
    : iconNames;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 1024 }}>
        <fieldset>
          <legend>选择容器CSS color:</legend>

          <div style={{ display: 'flex' }}>
            {Colors.map((c) => (
              <div key={c}>
                <input type="radio" value={c} checked={c === color} onChange={() => setColor(c)} />
                <label htmlFor={c}>{c}</label>
              </div>
            ))}
          </div>
        </fieldset>

        <h2>
          图标列表
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>
            (
            <span>
              version：<i>{VITE_ICONS_REACT_PACKAGE_VERSION}</i>；
            </span>
            <span>
              数量：<i>{iconNames.length}</i>；
            </span>
            <span>
              更新时间：
              <i>{new Date(+BUILD_TIMESTAMP).toLocaleString()}</i>
            </span>
            )
          </span>
        </h2>
        <div style={{ padding: 10 }}>
          <input
            style={{ width: '100%', height: 36, padding: '0 10px' }}
            type="search"
            placeholder="在此搜索图标，点击图标可复制代码"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>

        <div style={{ display: 'grid', gridGap: 8, gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
          {iconsNamesByKeyword.map((iconName) => {
            const IconComponent = typedIcons[iconName];
            const className = ['icon-box'];
            if (copiedIconName === iconName) {
              className.push('copied');
            }
            return (
              <div
                key={iconName}
                className={className.join(' ')}
                onClick={() => {
                  if (CopyTimer) {
                    clearTimeout(CopyTimer);
                    CopyTimer = undefined;
                  }
                  navigator.clipboard.writeText(`<icons.${iconName} />`).then(() => {
                    setCopiedIconName(iconName);
                    CopyTimer = setTimeout(() => setCopiedIconName(undefined), 2000);
                  });
                }}
              >
                <div style={{ color, height: 50, fontSize: 36 }}>
                  <IconComponent />
                </div>
                <div style={{ fontSize: 12 }}>{iconName}</div>
              </div>
            );
          })}
        </div>

        <h2>图标与文字垂直居中</h2>
        <div>
          <button style={{ fontSize: 14 }}>
            按钮 <icons.RollbackOutlined className="classname-will-be-merged" />
          </button>
        </div>
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
