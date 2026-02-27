// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MuseumFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 85.312h512v184.64l170.624-18.944v346.304H725.312v341.376h-640V345.792L256 326.848zm85.312 232.128 341.312-37.952v-108.8H341.312zM256 469.248v85.504h85.504v-85.504zm170.624 0v85.504h85.504v-85.504zm384 469.44h128v-256h-128z" })))
        } />;
      }

      export default MuseumFilled;