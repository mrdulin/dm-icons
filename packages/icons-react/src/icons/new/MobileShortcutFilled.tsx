// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MobileShortcutFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 42.688h682.688v170.624H768V128H256v597.312h597.376v256H170.688zm384.192 768h-85.504v85.504h85.504zm445.888-191.808-66.944 33.344-33.28 66.944-33.344-66.944-66.944-33.28L867.2 585.6l33.28-66.944 33.344 66.944zM638.336 516.096l46.784 94.08 46.784-94.08 94.08-46.784-94.08-46.784-46.784-94.08-46.784 94.08-94.08 46.784zm362.432-196.288-66.944 33.344-33.28 66.944-33.344-66.944-66.944-33.28 66.944-33.344 33.28-66.944 33.344 66.944z" })))
        } />;
      }

      export default MobileShortcutFilled;