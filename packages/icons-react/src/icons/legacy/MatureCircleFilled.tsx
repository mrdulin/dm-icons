// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MatureCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 18 18", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("circle", { cx: 9, cy: 9, r: 9, fill: "currentColor", fillOpacity: 0.2 }),
    React.createElement("path", { fill: "currentColor", d: "M9.78 12.196v.852c-1.848.384-3.84.72-5.976.984l-.192-.828c.96-.108 1.896-.228 2.808-.372v-2.268H4.08v-.84h2.34V8.332h.864v1.392h2.16v.84h-2.16v2.124c.852-.144 1.68-.312 2.496-.492M3.768 3.724h5.964v.816H6.648c-.576 1.2-1.116 2.1-1.62 2.712a46 46 0 0 0 3.396-.456 19 19 0 0 0-.888-1.308l.66-.432C9 6.136 9.612 7.084 10.044 7.888l-.72.504a15 15 0 0 0-.516-.948c-1.512.264-3.18.492-4.98.672l-.204-.78c.144-.024.264-.048.348-.084.492-.432 1.08-1.332 1.764-2.712H3.768zM12.9 14.092h-1.764l-.192-.84c.576.024 1.128.048 1.656.048.336 0 .516-.18.516-.528v-9.54h.876v9.756c0 .732-.372 1.104-1.092 1.104m-2.184-9.78h.84v7.428h-.84z" })))
        } />;
      }

      export default MatureCircleFilled;