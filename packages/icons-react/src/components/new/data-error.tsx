import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDataError = ({
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
    <path d="M85.312 85.312h853.312v533.376h-85.312v-64H170.624v298.688h448v85.312H85.312zm85.312 384h682.688V170.688H170.624zm85.248-192h85.504v85.568h-85.504zm485.632 403.84L832 771.648l90.496-90.496 60.352 60.352L892.352 832l90.496 90.496-60.352 60.352L832 892.352l-90.496 90.496-60.352-60.352L771.648 832l-90.496-90.496zm-485.632-19.84h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgDataError;
