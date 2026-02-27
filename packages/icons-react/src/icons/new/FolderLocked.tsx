// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderLocked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 106.688h361.856l85.312 106.624h491.52v213.376H896v-128H448.832L363.52 192H128v618.688h426.688V896h-512zM832 576c29.44 0 53.376 23.872 53.376 53.312v32H778.688v-32C778.688 599.872 802.56 576 832 576m138.688 85.312v-32a138.688 138.688 0 0 0-277.312 0v32H640v277.376h384V661.312zm-32 85.376v106.624H725.312V746.688h213.312z" })))
        } />;
      }

      export default FolderLocked;