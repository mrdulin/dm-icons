// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FilterClear = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M109.632 128h804.672l-295.68 418.88V896H405.312V546.88zm164.672 85.312 216.32 306.496v290.88h42.688v-290.88l216.32-306.496zm488.512 361.152 90.496 90.56 90.496-90.56 60.352 60.352-90.496 90.56 90.496 90.496-60.352 60.352-90.496-90.56-90.496 90.56-60.352-60.352 90.496-90.496-90.496-90.56z" })))
        } />;
      }

      export default FilterClear;