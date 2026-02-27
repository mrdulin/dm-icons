// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Theaters = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M938.624 938.688H85.312V85.312h853.312zm-85.312-768H746.624v106.624h106.688zm0 192H746.624v106.624h106.688zm0 192H746.624v106.624h106.688zm-106.688 192v106.624h106.688V746.688zm-85.312-85.376V554.688H640v-85.376h21.312V362.688H640v-85.376h21.312V170.688H362.624v106.624H384v85.376h-21.376v106.624H384v85.376h-21.376v106.624H384v85.376h-21.376v106.624h298.688V746.688H640v-85.376zm-384-490.624H170.624v106.624h106.688zm0 192H170.624v106.624h106.688zm0 192H170.624v106.624h106.688zm0 192H170.624v106.624h106.688z" })))
        } />;
      }

      export default Theaters;