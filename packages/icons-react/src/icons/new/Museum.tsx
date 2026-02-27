// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Museum = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 85.312h512v184.64l170.624-18.944v687.68H85.312V345.792L256 326.848zm85.312 232.128 341.312-37.952v-108.8H341.312zM768 853.376h85.312V640H768zm85.312-298.688v-208.32l-682.688 75.84v431.168h512V554.688zM256 469.248h85.504v85.504H256zm170.624 0h85.504v85.504h-85.504z" })))
        } />;
      }

      export default Museum;