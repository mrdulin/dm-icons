// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChartAreaMultiFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.624 853.312v-768H85.312v853.376h853.312v-85.376zM896 776.96V366.336l-239.68 239.68-126.592-147.648L256 706.432v70.528zm-640-147.2v-115.2l281.152-255.68 126.592 147.712L896 174.336v120.512l-237.184 237.12-129.28-150.848z" })))
        } />;
      }

      export default ChartAreaMultiFilled;