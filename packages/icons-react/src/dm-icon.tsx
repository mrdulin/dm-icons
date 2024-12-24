import React, { useEffect, useRef } from 'react';
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import { getShadowRoot } from 'rc-util/lib/Dom/shadow';

export type DMIconProps = React.HTMLProps<HTMLSpanElement> & {
  icon: React.ComponentType;
};

const iconStyles = `
.dmicon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  `;
export const DMIcon = ({ icon: Icon, ...restProps }: DMIconProps) => {
  const eleRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const ele = eleRef.current;
    if (!ele) return;
    const shadowRoot = getShadowRoot(ele);

    updateCSS(iconStyles, '@d-matrix/icons-react', {
      prepend: true,
      attachTo: shadowRoot,
    });
  }, []);

  return (
    <span ref={eleRef} role="img" className="dmicon" {...restProps}>
      <Icon />
    </span>
  );
};
