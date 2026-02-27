// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Upscale = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m642.368 85.12 294.848 1.664 1.664 294.848-85.312.448-.896-150.4-214.4 214.4-60.416-60.288 214.528-214.528-150.528-.832zm-557.056.192H512v85.376H170.624v256H85.312zm0 426.688H256v85.312h-85.376v85.376H85.312zm256 0H512v170.688h-85.376v-85.376h-85.312zm597.312 0v426.688H597.312v-85.376h256V512zm-768 256v85.312H256v85.376H85.312V768zM512 768v170.688H341.312v-85.376h85.312V768z" })))
        } />;
      }

      export default Upscale;