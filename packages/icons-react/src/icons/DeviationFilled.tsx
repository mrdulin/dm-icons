// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const DeviationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 16 16", width: "1em", height: "1em", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", fillOpacity: 0.2, d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" }),
    React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.6 2.912c.154.33.297.704.44 1.111h2.706v3.003h-5.61c-.044 2.321-.473 4.324-1.287 6.018l-.694-.616v.715h-1V7.269c-.276.373-.561.747-.858 1.1l-.309-1.046c.935-1.243 1.628-2.695 2.08-4.367l.935.44c-.22.76-.507 1.485-.848 2.178v6.689C5.86 10.8 6.212 8.94 6.223 6.686V4.023h2.794c-.143-.34-.298-.648-.452-.934zM7.146 6.136h4.675v-1.2H7.146z", clipRule: "evenodd" }),
    React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.778 12.34c0 .484-.285.736-.857.736h-.474l-.209-.77.42.034q.23 0 .23-.198v-1.354h-.77v2.102h-.737v-2.102h-.737v2.102h-.737v-2.102h-.77v2.277h-.859V7.862h5.5zM8.137 9.952h.77V8.688h-.77zm1.507 0h.737V8.688h-.737zm1.474 0h.77V8.688h-.77z", clipRule: "evenodd" })))
        } />;
      }

      export default DeviationFilled;