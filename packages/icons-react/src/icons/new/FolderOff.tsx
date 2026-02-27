// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m404.544 106.688 85.376 106.624h107.52v85.376H448.832L363.52 192H128v490.752l.064 60.224-85.184 85.312-.128-145.536V106.624h361.856zm509.184 64-42.688 42.624h110.336v640H231.04L128 956.352 67.712 896l785.664-785.664zm-128 128L316.352 768H896V298.688z" })))
        } />;
      }

      export default FolderOff;