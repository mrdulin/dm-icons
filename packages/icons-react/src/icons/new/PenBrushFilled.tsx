// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PenBrushFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M239.872 938.624H85.312v-154.56a128 128 0 0 1 37.504-90.496l92.032-92.096 207.616 207.616-92.096 92.032a128 128 0 0 1-90.496 37.504m242.944-189.888 478.528-478.528L753.728 62.592 275.2 541.12 482.816 748.8z" })))
        } />;
      }

      export default PenBrushFilled;