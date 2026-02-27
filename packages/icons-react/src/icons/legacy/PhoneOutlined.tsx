// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PhoneOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M20 9.6a.8.8 0 1 1-1.6 0 8 8 0 0 0-8-8 .8.8 0 1 1 0-1.6C15.702 0 20 4.298 20 9.6m-3.2 0a.8.8 0 1 1-1.6 0 4.8 4.8 0 0 0-4.8-4.8.8.8 0 1 1 0-1.6 6.4 6.4 0 0 1 6.4 6.4m-3.2 0a.8.8 0 1 1-1.6 0A1.6 1.6 0 0 0 10.4 8a.8.8 0 1 1 0-1.6 3.2 3.2 0 0 1 3.2 3.2m-8.821.696c-.395 1.158.15 2.146 1.645 3.774q1.494 1.628 3.422 1.053.702-.352 2.599-.835t3.14.835Q17 16.35 17 17.42q0 1.069-2.168 2.483-5.266.69-10.146-3.553C-.194 12.11-.194 6.361.109 5.174.842 3.988 2.013 3 2.895 3s1.194.496 2.31 1.666q1.115 1.17.425 3a55 55 0 0 1-.851 2.63" })))
        } />;
      }

      export default PhoneOutlined;