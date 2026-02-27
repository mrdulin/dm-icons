// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Microphone = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M213.312 298.688a256 256 0 0 1 256-256h85.312a256 256 0 0 1 256 256v256a256.064 256.064 0 0 1-256 256v42.624H768v85.376H256v-85.376h213.312v-42.624a256.064 256.064 0 0 1-256-256zm85.312 192v64h128V640H321.472a170.62 170.62 0 0 0 147.84 85.312h85.312c63.168 0 118.4-34.304 147.84-85.312H597.312v-85.312h128v-64h-128v-85.376h128v-64h-128V256h122.624c-18.944-73.6-85.76-128-165.312-128h-85.312C389.76 128 322.944 182.4 304 256h122.624v85.312h-128v64h128v85.376z" })))
        } />;
      }

      export default Microphone;