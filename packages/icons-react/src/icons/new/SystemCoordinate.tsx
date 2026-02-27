// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemCoordinate = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M566.272 42.688v113.088l282.24 165.888V652.16L953.6 707.392l-39.68 75.52-106.944-56.192-240.64 141.568v113.024h-85.44V868.288l-242.752-142.72-133.12 55.616-32.896-78.72 126.592-52.928V321.664l282.176-165.888V42.688h85.312zm-42.624 186.944-198.016 116.48 198.016 116.416L721.6 346.048zm239.488 191.04-196.8 115.648v232.896l196.8-115.776zM480.96 769.28V536.32l-196.8-115.648v232.832L481.024 769.28z" })))
        } />;
      }

      export default SystemCoordinate;