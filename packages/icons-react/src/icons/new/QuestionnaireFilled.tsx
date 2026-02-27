// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const QuestionnaireFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M960 85.312V768H293.376L64 968.704V85.312zM469.312 362.688a42.688 42.688 0 0 1 85.376 0c0 13.824-3.328 21.632-6.4 26.368a41.15 41.15 0 0 1-14.72 12.992c-6.784 3.84-14.016 6.464-22.144 9.344l-.768.256c-3.2 1.088-8.64 3.008-13.184 5.12a54 54 0 0 0-12.608 8.192 44.93 44.93 0 0 0-15.36 33.728v42.624h85.312v-15.04c6.4-2.56 13.696-5.888 21.12-10.112 14.72-8.384 31.168-21.12 43.84-40.512 12.864-19.84 20.224-44.16 20.224-72.96a128 128 0 1 0-256 0v42.624h85.312zm85.568 170.624h-85.568v85.568h85.568z" })))
        } />;
      }

      export default QuestionnaireFilled;