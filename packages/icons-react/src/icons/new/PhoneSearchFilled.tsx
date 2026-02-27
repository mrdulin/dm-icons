// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PhoneSearchFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M853.376 42.688H170.688v938.624H631.36a266.75 266.75 0 0 1-161.792-256H256V128h512v343.232a265 265 0 0 1 85.376 25.216zM938.688 736c0 40.512-11.904 78.208-32.32 109.888l71.296 71.552-60.416 60.224-71.232-71.424A202.688 202.688 0 1 1 938.688 736m-85.312 0a117.312 117.312 0 1 0-34.688 83.264l.384-.384c21.184-21.248 34.304-50.56 34.304-82.88" })))
        } />;
      }

      export default PhoneSearchFilled;