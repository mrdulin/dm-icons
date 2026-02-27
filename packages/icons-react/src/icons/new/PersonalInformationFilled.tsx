// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PersonalInformationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M636.16 42.688H128v938.624h768V302.528zM640 448a128 128 0 1 1-256 0 128 128 0 0 1 256 0M256 810.688A170.69 170.69 0 0 1 426.688 640h170.624A170.69 170.69 0 0 1 768 810.688v42.624H256z" })))
        } />;
      }

      export default PersonalInformationFilled;