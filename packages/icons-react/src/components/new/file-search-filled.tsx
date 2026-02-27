import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileSearchFilled = ({
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
    <path d="M554.688 42.688H128v938.624h503.296A266.752 266.752 0 1 1 896 522.624V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM736 533.312a202.688 202.688 0 1 0 109.888 372.992l71.488 71.36 60.288-60.352-71.424-71.36A202.688 202.688 0 0 0 736 533.312M618.688 736a117.312 117.312 0 1 1 234.624 0 117.312 117.312 0 0 1-234.624 0" />
  </svg>
);
export default SvgFileSearchFilled;
