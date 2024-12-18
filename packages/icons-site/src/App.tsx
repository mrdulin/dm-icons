import * as icons from '@d-matrix/icons-react';
import { useState } from 'react';

const typedIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = icons;

const Colors = ['initial', '#b8cae6', '#ffffff'];

function App() {
  const [color, setColor] = useState<(typeof Colors)[number]>();
  return (
    <div>
      <fieldset>
        <legend>选择容器CSS color:</legend>

        <div style={{ display: 'flex' }}>
          {Colors.map((c) => (
            <div>
              <input type="radio" value={c} checked={c === color} onChange={() => setColor(c)} />
              <label htmlFor={c}>{c}</label>
            </div>
          ))}
        </div>
      </fieldset>

      <div style={{ display: 'flex' }}>
        {Object.keys(icons).map((iconName) => {
          const IconComponent = typedIcons[iconName];
          return (
            <div
              key={iconName}
              style={{ width: 80, height: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ height: 30, color }}>
                <IconComponent fill="currentColor" />
              </div>
              <div style={{ fontSize: 12 }}>{iconName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
