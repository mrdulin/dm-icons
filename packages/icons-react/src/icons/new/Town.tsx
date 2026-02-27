// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Town = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h232.192l151.808 167.04V85.312h233.344l235.968 283.264v570.112H85.312V85.376zm469.312 85.376v682.624h298.688v-453.76l-190.656-228.8H554.624zm-85.312 682.624V379.264L279.744 170.688h-109.12v682.624zM256 341.376h85.504v85.44H256v-85.568zm384 0h85.504v85.44H640v-85.568zM256 511.872h85.504v85.504H256v-85.44zm384 0h85.504v85.504H640v-85.44zM256 682.56h85.504V768H256zm384 0h85.504V768H640z" })))
        } />;
      }

      export default Town;