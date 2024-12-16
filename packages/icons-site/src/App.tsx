import * as icons from '@d-matrix/icons-react';

const typedIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = icons;

function App() {
  return (
    <div style={{ display: 'flex' }}>
      {Object.keys(icons).map((iconName) => {
        const IconComponent = typedIcons[iconName];
        return (
          <div
            key={iconName}
            style={{ width: 80, height: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ height: 30 }}>
              <IconComponent />
            </div>
            <div style={{ fontSize: 12 }}>{iconName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
