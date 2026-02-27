import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCenterFocusStrongFilled = ({
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
    <path d="M85.312 85.312H384v85.376H170.624V384H85.312zm554.688 0h298.624V384h-85.312V170.688H640zM341.312 512a170.688 170.688 0 1 1 341.312 0 170.688 170.688 0 0 1-341.312 0M170.624 640v213.312H384v85.376H85.312V640zm768 0v298.688H640v-85.376h213.312V640z" />
  </svg>
);
export default SvgCenterFocusStrongFilled;
