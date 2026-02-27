// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FilterSortFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m784.32 740.352 68.992 69.184 69.056-69.184 60.416 60.224-129.408 129.792L723.84 800.576l60.416-60.224zm-.064-30.528 69.12-69.12 69.056 69.12 60.352-60.288-129.408-129.664L723.84 649.536zM128 128h768L597.312 546.88V896H426.688V546.88z" })))
        } />;
      }

      export default FilterSortFilled;