import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterClearFilled = ({
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
    <path d="m943.872 574.464 60.352 60.352-90.56 90.56 90.56 90.496-60.352 60.352-90.496-90.56-90.56 90.56-60.288-60.352 90.496-90.496-90.496-90.56 60.288-60.352 90.56 90.56zM128 128h768L597.312 546.88V896H426.688V546.88z" />
  </svg>
);
export default SvgFilterClearFilled;
