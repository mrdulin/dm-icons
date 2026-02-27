// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LockOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { viewBox: "0 0 22 22", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M14.539 9.77h1.115c1 0 1.808.807 1.808 1.807v5.615c0 1-.808 1.808-1.808 1.808H5.808C4.808 19 4 18.192 4 17.192v-5.615c0-1 .808-1.808 1.808-1.808H7.23V7.577C7.23 5.615 8.885 4 10.885 4s3.654 1.615 3.654 3.577zm-3.654-4.616c-1.385 0-2.5 1.077-2.5 2.423v2.192h5V7.577c0-1.346-1.116-2.423-2.5-2.423m4.769 12.692a.674.674 0 0 0 .654-.654v-5.615a.674.674 0 0 0-.654-.654H5.808a.674.674 0 0 0-.654.654v5.615c0 .346.308.654.654.654zm-5.5-5.192c0-.308.27-.577.577-.577s.577.27.577.577v1.923c0 .308-.27.577-.577.577a.59.59 0 0 1-.577-.577z" })))
        } />;
      }

      export default LockOutlined;