// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Screenshot = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v597.376h-85.312v-512H170.624v512H85.312zM230.464 384h120.448L512 546.048 673.024 384h120.448L572.16 606.592 686.848 721.92c20.48-11.392 43.968-17.92 68.928-17.92 76.8 0 140.16 61.44 140.16 138.688 0 77.184-63.36 138.688-140.16 138.688s-140.16-61.44-140.16-138.688c0-20.928 4.608-40.704 12.928-58.368L512 667.072 395.392 784.32c8.32 17.728 12.992 37.44 12.992 58.368 0 77.184-63.424 138.688-140.16 138.688-76.8 0-140.224-61.44-140.224-138.688S191.36 704 268.16 704c24.96 0 48.512 6.528 68.928 17.92L451.84 606.592zm525.312 405.376a54.08 54.08 0 0 0-54.848 53.312c0 28.8 23.936 53.312 54.848 53.312a54.08 54.08 0 0 0 54.848-53.312 54.08 54.08 0 0 0-54.848-53.312m-487.616 0a54.08 54.08 0 0 0-54.848 53.312c0 28.8 23.936 53.312 54.848 53.312a54.144 54.144 0 0 0 54.848-53.312 54.08 54.08 0 0 0-54.848-53.312" })))
        } />;
      }

      export default Screenshot;