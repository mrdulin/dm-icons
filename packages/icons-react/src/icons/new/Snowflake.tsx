// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Snowflake = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 42.688v67.648l42.688-42.688L657.728 128l-103.04 103.04v179.2l168.256-169.856 60.608 60.032-168.512 170.24 177.856-1.216L896 366.336l60.352 60.288-42.624 42.688h67.648v85.312h-67.648l42.624 42.688L896 657.664 793.152 554.752l-178.112 1.28L783.552 722.88l-60.032 60.608L554.688 616.32v176.64L657.728 896l-60.352 60.352-42.688-42.688v67.648h-85.312v-67.648l-42.688 42.688L366.336 896l103.04-103.04V616.32L300.544 783.488l-60.032-60.608L408.96 555.968l-178.112-1.216L128 657.664l-60.288-60.352 42.624-42.688H42.688v-85.312h67.648l-42.624-42.688L128 366.336 231.168 469.44l177.856 1.216-168.512-170.112 60.608-60.096 168.256 169.856V231.04L366.336 128l60.352-60.288 42.688 42.688V42.688z" })))
        } />;
      }

      export default Snowflake;