// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Bridge = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 85.312V231.04a491 491 0 0 0 17.28 8.192c26.048 11.52 66.048 26.432 120 38.4 53.888 11.968 121.92 21.12 204.032 21.12 82.176 0 150.208-9.152 204.096-21.12a636.3 636.3 0 0 0 119.936-38.4 411 411 0 0 0 17.28-8.192V85.312h85.376V640h42.688v85.376h-42.688v213.312h-85.312V725.376H170.688v213.312H85.376V725.376H42.688V640h42.688V85.312zm0 554.688H256V352.704c-34.176-9.088-62.656-19.008-85.312-28.16zm170.688-269.184V640h128V383.232a1039 1039 0 0 1-128-12.416m213.312 12.416V640h128V370.816c-38.144 6.144-80.768 10.688-128 12.416M768 352.704v287.36h85.376V324.48c-22.656 9.152-51.136 19.072-85.376 28.16zM872.384 220.48l.128-.064h-.064z" })))
        } />;
      }

      export default Bridge;