// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Accessibility = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 85.312A53.312 53.312 0 1 0 512 192a53.312 53.312 0 0 0 0-106.688m-138.688 53.376a138.688 138.688 0 1 1 277.376 0 138.688 138.688 0 0 1-277.376 0M96 410.688c0-61.888 50.176-112 112-112h608a112 112 0 1 1 0 224H703.872l77.824 350.208a106.688 106.688 0 0 1-104.128 129.792h-91.392L512 733.76l-74.176 268.928h-91.392a106.688 106.688 0 0 1-104.128-129.856l77.824-350.144H208a112 112 0 0 1-112-112M208 384a26.688 26.688 0 0 0 0 53.312h218.496l-100.864 454.08a21.312 21.312 0 0 0 20.8 25.92h26.432L458.176 608h107.648l85.312 309.312h26.432a21.312 21.312 0 0 0 20.8-25.92l-100.864-454.08H816A26.688 26.688 0 0 0 816 384z" })))
        } />;
      }

      export default Accessibility;