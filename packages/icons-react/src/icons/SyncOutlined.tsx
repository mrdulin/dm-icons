// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const SyncOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M9.066.31a7.003 7.003 0 0 1 2.628 11.884h1.399c.463 0 .844.348.896.797l.006.106a.903.903 0 0 1-.797.897l-.105.006H8.128V9.032a.903.903 0 0 1 1.799-.105l.006.105v2.256a5.196 5.196 0 0 0-1.399-9.251A.903.903 0 0 1 9.066.31M5.871 0v4.968a.903.903 0 0 1-1.8.105l-.006-.105V2.714a5.196 5.196 0 0 0 1.408 9.251.903.903 0 0 1-.53 1.727A7.003 7.003 0 0 1 2.305 1.806h-1.4a.903.903 0 0 1-.897-.797L.003.903C.003.44.351.058.8.006L.906 0z" })))
        } />;
      }

      export default SyncOutlined;