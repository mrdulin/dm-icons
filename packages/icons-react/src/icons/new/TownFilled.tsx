// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TownFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M341.504 341.248H256v85.504h85.504zm0 170.688H256v85.504h85.504zm0 170.624H256v85.504h85.504zm-24-597.248H85.312v853.376h853.312V368.576L702.72 85.312H469.312v167.04zm151.808 293.824v474.24H170.624V170.624h109.12l189.568 208.448zM640 341.248h85.504v85.504H640zm0 170.688h85.504v85.504H640zm85.504 170.624v85.504H640V682.56z" })))
        } />;
      }

      export default TownFilled;