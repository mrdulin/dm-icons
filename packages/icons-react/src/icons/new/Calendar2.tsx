// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Calendar2 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M341.312 42.688v128h341.312v-128H768v128h170.624v768H85.312v-768H256v-128zM170.624 256v128h682.688V256zm682.688 213.312H170.624v384h682.688zm-131.648 96L480.32 806.72 329.472 655.872l60.288-60.352 90.56 90.496 180.992-180.992z" })))
        } />;
      }

      export default Calendar2;