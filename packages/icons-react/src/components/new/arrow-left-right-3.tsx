import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftRight3 = ({
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
    <path d="m892.288 320-231.04 231.04-60.288-60.352 128-128H362.624v-85.376H728.96l-128-128 60.352-60.288L892.352 320zm-231.04 426.688H295.04l128 128-60.352 60.352L131.584 704l231.04-231.04 60.352 60.352-128 128h366.336v85.376z" />
  </svg>
);
export default SvgArrowLeftRight3;
