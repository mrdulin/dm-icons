// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const QuestionnaireDouble = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h810.688v597.376H248.32L42.688 829.568zM128 170.688v493.056l92.992-66.432H768V170.688zM1002.688 192v786.944L796.992 832H320v-85.312h504.32l93.056 66.432V192zM448 277.312A42.69 42.69 0 0 0 405.376 320v42.688H320V320a128 128 0 1 1 256 0c0 28.8-7.296 53.12-20.224 72.96a126.1 126.1 0 0 1-43.904 40.576c-7.36 4.16-14.656 7.488-21.056 10.112v15.04h-85.312V416c0-18.048 10.432-29.312 15.36-33.728a51.9 51.9 0 0 1 12.672-8.128 135 135 0 0 1 13.952-5.44c8.128-2.816 15.36-5.44 22.144-9.344a41.15 41.15 0 0 0 14.72-12.992c3.008-4.736 6.336-12.544 6.336-26.368A42.69 42.69 0 0 0 448 277.312m-42.624 213.376h85.504v85.504h-85.504z" })))
        } />;
      }

      export default QuestionnaireDouble;