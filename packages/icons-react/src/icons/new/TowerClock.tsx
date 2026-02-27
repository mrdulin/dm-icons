// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TowerClock = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 39.744 225.6 84.608-30.016 79.872-24.96-9.344v18.432h128v512h-85.312v256H298.624v-256h-85.312v-512h128V194.88l-24.96 9.344-29.952-79.872zM426.624 162.88v50.432h170.688V162.88l-85.312-32zM384 725.312V896h256V725.312h-85.376v128h-85.312v-128zM725.312 640V298.624H298.624V640zM512 426.624A42.688 42.688 0 1 0 512 512a42.688 42.688 0 0 0 0-85.376m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0" })))
        } />;
      }

      export default TowerClock;