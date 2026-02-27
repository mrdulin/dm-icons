// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PalaceFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.624 133.376v-48h-85.312v48c-73.6 18.944-128 85.76-128 165.312h-128V384H256v42.688h512V384h42.624v-85.312h-128c0-79.552-54.4-146.368-128-165.312M85.312 512h853.312v85.312H896v256h42.624v85.376h-256v-85.376a170.688 170.688 0 1 0-341.312 0v85.376h-256v-85.376H128v-256H85.312zm341.312 341.312a85.312 85.312 0 1 1 170.688 0v85.376H426.624z" })))
        } />;
      }

      export default PalaceFilled;