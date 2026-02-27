// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NotStartedCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "1em", height: "1em", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", fillOpacity: 0.4, d: "M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11v1C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12v-1c6.075 0 11-4.925 11-11" }),
    React.createElement("path", { fill: "currentColor", d: "M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m0 4.25a.71.71 0 0 0-.708.708v4.25l.002.048c.015.219.13.42.313.542l2.833 1.889.037.022a.71.71 0 0 0 .946-.219l.023-.037a.71.71 0 0 0-.22-.945l-2.517-1.679V8.458l-.001-.041A.71.71 0 0 0 12 7.75" })))
        } />;
      }

      export default NotStartedCircleFilled;