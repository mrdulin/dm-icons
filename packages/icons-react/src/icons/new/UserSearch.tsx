// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserSearch = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m501.312 320a117.312 117.312 0 1 0 0 234.688 117.312 117.312 0 0 0 0-234.688M554.624 757.312a202.688 202.688 0 1 1 372.928 110.016l71.424 71.296-60.288 60.352-71.488-71.36a202.688 202.688 0 0 1-312.576-170.304m-213.312-74.624a170.69 170.69 0 0 0-170.688 170.624H492.8v85.376H85.312v-85.376a256 256 0 0 1 256-256h149.312v85.376z" })))
        } />;
      }

      export default UserSearch;