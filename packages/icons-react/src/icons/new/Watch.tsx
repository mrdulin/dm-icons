// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Watch = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M303.68 0h416.64l21.504 171.712a128 128 0 0 1 111.552 126.976V384H896v256h-42.624v85.312a128 128 0 0 1-111.552 126.976L720.384 1024h-416.64L282.24 852.288a128 128 0 0 1-111.552-126.976V298.688A128 128 0 0 1 282.24 171.712zm64.64 170.688h287.36l-10.624-85.376H378.944zM298.752 768H725.44a42.69 42.69 0 0 0 42.624-42.688V298.688A42.69 42.69 0 0 0 725.376 256H298.688A42.69 42.69 0 0 0 256 298.688v426.624C256 748.864 275.136 768 298.688 768zm69.696 85.312 10.624 85.376H645.12l10.624-85.376h-287.36z" })))
        } />;
      }

      export default Watch;