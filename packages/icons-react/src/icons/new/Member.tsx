// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Member = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M234.688 298.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m128-213.376a213.312 213.312 0 1 0 0 426.688 213.312 213.312 0 0 0 0-426.688m298.624 0h-42.624v85.376h42.624a128 128 0 1 1 0 256h-42.624V512h42.624a213.312 213.312 0 1 0 0-426.688M0 810.688a213.31 213.31 0 0 1 213.312-213.376H512a213.31 213.31 0 0 1 213.312 213.376V896H640v-85.312a128 128 0 0 0-128-128H213.312a128 128 0 0 0-128 128V896H0zm1024 0a213.31 213.31 0 0 0-213.312-213.376H768v85.376h42.688a128 128 0 0 1 128 128V896H1024z" })))
        } />;
      }

      export default Member;