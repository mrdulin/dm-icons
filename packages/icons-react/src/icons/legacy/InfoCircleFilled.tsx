// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const InfoCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m1.619 12.006c.213 0 .386-.201.386-.448s-.173-.448-.386-.448L9 11V7c0-.041.004-.055.007-.07-.011.026-.036.058-.113.058H6.38c-.213 0-.385.201-.385.448s.172.448.385.448L7 8v3l-.62.11c-.213 0-.385.201-.385.448s.172.448.385.448zM7 4v.941c-.002.021-.013.039-.013.06 0 .022.011.039.013.06V6h.967c.011.001.021.007.033.007.011 0 .021-.006.033-.007H9v-.938c.001-.021.012-.039.012-.061S9.001 4.962 9 4.94V4h-.98c-.007 0-.013-.004-.02-.004S7.987 4 7.98 4z" })))
        } />;
      }

      export default InfoCircleFilled;