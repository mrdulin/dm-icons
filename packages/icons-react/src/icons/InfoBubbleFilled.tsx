// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const InfoBubbleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1.047 8.41C1.244 4.131 4.972.817 9.375 1.008s7.813 3.814 7.617 8.093a7.35 7.35 0 0 1-.957 3.816 1.22 1.22 0 0 0-.08 1l.824 2.415a.31.31 0 0 1-.08.338.33.33 0 0 1-.351.063l-2.22-.84a1.36 1.36 0 0 0-1.162.065 8.17 8.17 0 0 1-8.346-.215C2.102 14.15.72 11.313 1.047 8.41M10 13.143V8.857C10 8.384 9.552 8 9 8s-1 .384-1 .857v4.286c0 .473.448.857 1 .857s1-.384 1-.857M9 6.667A1.333 1.333 0 1 0 9 4a1.333 1.333 0 0 0 0 2.667" })))
        } />;
      }

      export default InfoBubbleFilled;