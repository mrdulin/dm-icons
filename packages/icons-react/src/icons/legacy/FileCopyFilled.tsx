// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileCopyFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 14 14", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M7.583.583H3.5v10.5h8.75V5.25H7.583z" }),
    React.createElement("path", { d: "M12.25 4.084v-.242L8.992.583H8.75v3.5zM2.333 12.25V2.917H1.167v10.5H8.75V12.25z" })))
        } />;
      }

      export default FileCopyFilled;