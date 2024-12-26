import * as icons from '@d-matrix/icons-react';
import { useState } from 'react';
import './styles.css';

const typedIcons: Record<string, React.ComponentType<React.SVGProps<HTMLSpanElement>>> = icons;
const iconNames = Object.keys(typedIcons);

const Colors = ['initial', '#b8cae6', '#000000'];

function App() {
  const [color, setColor] = useState<(typeof Colors)[number]>();
  const [searchKeyword, setSearchKeyword] = useState<string>();

  const iconsNamesByKeyword = searchKeyword ? iconNames.filter((iconName) => iconName.includes(searchKeyword)) : iconNames;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 960 }}>
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

        <h2>图标列表</h2>
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
            return (
              <div key={iconName} className="icon-box">
                <div style={{ color, height: 30, fontSize: 20 }}>
                  <IconComponent />
                </div>
                <div style={{ fontSize: 12 }}>{iconName}</div>
              </div>
            );
          })}
        </div>

        <h2>Icon与文字垂直居中</h2>
        <div>
          <button style={{ fontSize: 14 }}>
            按钮 <icons.RollbackOutlined className="classname-will-be-merged" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
