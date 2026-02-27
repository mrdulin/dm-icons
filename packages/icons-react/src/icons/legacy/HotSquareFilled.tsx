// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HotSquareFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 10", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("rect", { width: 20, height: 10, fill: "currentColor", rx: 2 }),
    React.createElement("path", { fill: "#fff", d: "M6.677 7.92H5.193V5.48h-2.2V7.92H1.5V2.08h1.493v2.318h2.2V2.08h1.484zm6.19-2.8q0 .855-.336 1.512a2.4 2.4 0 0 1-.955 1.013 2.8 2.8 0 0 1-1.41.355q-.792 0-1.404-.343a2.4 2.4 0 0 1-.955-.98q-.342-.639-.36-1.464v-.33q0-.858.334-1.513.334-.657.958-1.013A2.8 2.8 0 0 1 10.157 2q.788 0 1.404.353.617.353.96 1.005t.346 1.494zm-1.518-.244q0-.87-.309-1.322-.308-.45-.883-.451-1.122 0-1.187 1.588l-.004.43q0 .858.302 1.319t.898.461q.566 0 .872-.453t.31-1.304zM18.5 3.167h-1.86V7.92h-1.492V3.167h-1.825V2.08H18.5z" })))
        } />;
      }

      export default HotSquareFilled;