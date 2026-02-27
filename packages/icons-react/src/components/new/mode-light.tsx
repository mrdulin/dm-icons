import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgModeLight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M469.16 0h85.488v85.488H469.16zM180.126 119.85l60.469 60.404-60.469 60.469-60.468-60.469 60.468-60.468zm663.556 0 60.468 60.404-60.404 60.469-60.469-60.469 60.469-60.404zM511.904 256.08a255.952 255.952 0 1 0 0 511.904 255.952 255.952 0 0 0 0-511.904M170.592 512.096a341.248 341.248 0 1 1 682.56 0 341.248 341.248 0 0 1-682.56 0M0 469.352h85.488v85.488H-.064v-85.616zm938.512 0H1024v85.488h-85.488v-85.616zm-758.386 313.99 60.405 60.468-60.405 60.468-60.468-60.468 60.468-60.405zm663.556 0 60.468 60.468-60.404 60.468-60.469-60.468 60.469-60.405zM469.16 938.511h85.488V1024H469.16z" />
  </svg>
);
export default SvgModeLight;
