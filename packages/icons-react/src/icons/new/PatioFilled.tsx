// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PatioFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 42.688a777 777 0 0 0-265.28 45.184c-31.296 11.392-55.68 22.848-72.448 31.616a398 398 0 0 0-26.496 15.168l-.512.32-.128.064-.128.064L128 147.84v705.472H85.312v85.312h213.312V384H384v85.312h85.312V384h85.312v554.624h384v-85.312H896V147.84l-19.072-12.736h-.128l-.192-.128-.512-.32a174 174 0 0 0-6.912-4.352 399 399 0 0 0-19.52-10.816 603 603 0 0 0-72.512-31.616A777 777 0 0 0 512 42.688m-42.688 895.936v-85.312H384v85.312zm0-170.624H384v-64h85.312zm0-149.376H384v-64h85.312z" })))
        } />;
      }

      export default PatioFilled;