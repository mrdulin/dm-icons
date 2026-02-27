// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ExploreOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M318.72 84.16a469.312 469.312 0 0 1 621.056 621.056l-17.536 38.848-77.76-35.2 17.536-38.848a384 384 0 0 0-508.16-508.16l-38.848 17.664-35.136-77.76zM128 67.648l324.352 324.48.128-.064L632 571.52v.064L956.224 896l-60.352 60.352-83.648-83.648a469.312 469.312 0 0 1-660.928-660.992L67.648 128l60.288-60.352zm83.84 204.672a384 384 0 0 0 539.712 539.712L598.4 658.816 532.288 830.72l-89.6-249.344-249.344-89.664L365.248 425.6zm532.288 7.552L661.504 494.72 581.888 464l13.696-35.648-35.648 13.696-30.592-79.616 214.848-82.624z" })))
        } />;
      }

      export default ExploreOff;