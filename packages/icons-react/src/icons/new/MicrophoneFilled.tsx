// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MicrophoneFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M221.376 234.688h162.56V320h-170.56v85.312H384v85.376H213.312v64c0 7.168.32 14.272.896 21.312H384v85.312H236.544a256 256 0 0 0 232.768 149.376v42.624H256v85.376h512v-85.376H554.624v-42.624a256 256 0 0 0 232.768-149.376H640V576h169.792c.576-7.04.832-14.144.832-21.312v-64H640v-85.376h170.624V320H640v-85.312h162.56a256.13 256.13 0 0 0-247.936-192h-85.312a256.13 256.13 0 0 0-247.936 192" })))
        } />;
      }

      export default MicrophoneFilled;