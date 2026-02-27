// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CastFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v768H554.688v-42.496A469.31 469.31 0 0 0 85.376 384.192H42.88l-.192-.192zm0 341.312h42.688a384 384 0 0 1 384 384V896H384v-42.688A298.69 298.69 0 0 0 85.376 554.688H42.688zm0 170.688h42.688a213.31 213.31 0 0 1 213.312 213.312V896h-85.312v-42.688a128 128 0 0 0-128-128H42.688zm85.504 170.688H42.688v85.504h85.504z" })))
        } />;
      }

      export default CastFilled;