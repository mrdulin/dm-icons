// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Patio = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M246.72 87.872A777 777 0 0 1 512 42.688c112.384 0 202.688 22.4 265.216 45.184 31.296 11.392 55.68 22.848 72.512 31.616a399 399 0 0 1 26.432 15.168l.512.32.192.064v.064h.128L896 147.84v705.472h42.624v85.312H85.312v-85.312H128V147.84l19.008-12.672.128-.128.128-.064.512-.32a153 153 0 0 1 6.976-4.352c4.544-2.688 11.072-6.4 19.52-10.816a603 603 0 0 1 72.448-31.616m-33.408 107.52v657.92h85.312V320H384v85.312h85.312V320h85.312v533.312h256v-657.92A691.65 691.65 0 0 0 512 128c-100.864 0-181.248 20.16-236.032 40.064a518 518 0 0 0-62.592 27.328zM384 490.688v64h85.312v-64zM469.312 640H384v64h85.312zm0 149.312H384v64h85.312z" })))
        } />;
      }

      export default Patio;