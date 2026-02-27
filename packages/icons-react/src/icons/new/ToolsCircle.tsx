// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ToolsCircle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m469.376-384a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0M669.504 820.288l-179.52-179.52a213.376 213.376 0 0 1-251.136-290.752l13.568-31.488 57.856 11.2 78.592 78.592 19.584-19.52-78.592-78.656-11.264-57.792 31.552-13.568A213.376 213.376 0 0 1 640.832 489.92l179.52 179.52zm30.144-150.848L541.44 511.168l11.2-26.496a128 128 0 0 0-104.96-177.344l81.536 81.472-140.288 140.224-81.472-81.536A128 128 0 0 0 484.8 552.512l26.496-11.2 158.272 158.272 30.144-30.144z" })))
        } />;
      }

      export default ToolsCircle;