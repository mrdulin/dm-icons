// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderZip = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 106.688h361.856l85.312 106.624h491.52V896H42.688zM128 192v618.688h469.376v-85.376h85.312v-85.12h-85.312v-85.504h85.312v-85.184h-85.312V384h85.312v-85.312H448.832L363.52 192zm554.88 192.192v85.12h85.312v85.568H682.88V640h85.312v85.504H682.88v85.12H896v-512H768.192v85.568z" })))
        } />;
      }

      export default FolderZip;