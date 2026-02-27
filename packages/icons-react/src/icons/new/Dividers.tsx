// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dividers = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 42.688v52.48a185.984 185.984 0 0 1 144 180.928 184.3 184.3 0 0 1-28.992 99.392L809.216 640h129.472v85.312h-84.48l99.456 188.48-75.52 39.808-120.32-228.288h-203.2v85.312h-85.248v-85.312H266.24L145.856 953.6l-75.52-39.808 99.456-188.48h-84.48V640h129.472l139.52-264.512a184.3 184.3 0 0 1-28.928-99.392c0-88.192 61.568-161.664 144-180.864V42.688zM418.432 436.8 311.296 640h158.08v-85.376h85.312V640h158.08l-107.2-203.2c-27.52 15.872-59.52 24.96-93.568 24.96a186.6 186.6 0 0 1-93.568-24.96M512 175.68c-56.192 0-101.312 45.184-101.312 100.416 0 25.6 9.6 48.96 25.728 66.816 18.56 20.608 45.44 33.536 75.584 33.536 30.08 0 57.088-12.928 75.648-33.536 16-17.856 25.728-41.216 25.728-66.816 0-55.232-45.12-100.48-101.376-100.48z" })))
        } />;
      }

      export default Dividers;