// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MoonRising = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 853.376h354.24L512 776.576l115.072 76.8h354.304V768H652.928L512 674.048 371.072 768H42.688zm829.76-156.16 19.072-38.144c23.232-46.4 36.48-90.24 39.232-134.336l4.416-72.96-65.728 32.064A298.688 298.688 0 0 1 449.6 292.864c-14.528-54.08-15.872-106.176-3.072-153.792l19.2-71.424-71.424 19.2A426.69 426.69 0 0 0 92.608 609.28c2.176 8 7.04 20.736 10.24 29.248l4.864 12.288 1.536 3.84.448 1.024 16.256 39.872 79.04-32.192-16.256-39.808-.384-.96-1.408-3.52a1112 1112 0 0 1-4.48-11.392 313 313 0 0 1-7.424-20.48 341.44 341.44 0 0 1 177.664-393.92c-1.6 40.384 3.584 81.28 14.4 121.664A384 384 0 0 0 829.632 588.48c-3.968 10.368-8.768 21.12-14.464 32.448l-19.072 38.144 76.352 38.208z" })))
        } />;
      }

      export default MoonRising;