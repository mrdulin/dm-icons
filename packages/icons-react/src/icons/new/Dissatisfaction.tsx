// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dissatisfaction = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0m298.688-149.312v42.624a21.312 21.312 0 1 0 42.624 0v-42.624h85.376v42.624a106.688 106.688 0 1 1-213.376 0v-42.624zm298.624 0v42.624a21.312 21.312 0 0 0 42.688 0v-42.624H768v42.624a106.688 106.688 0 1 1-213.312 0v-42.624zM327.232 661.312a213.248 213.248 0 0 1 369.536 0l21.376 36.928-73.856 42.752L622.912 704a127.936 127.936 0 0 0-221.824 0l-21.312 36.992-73.856-42.752z" })))
        } />;
      }

      export default Dissatisfaction;