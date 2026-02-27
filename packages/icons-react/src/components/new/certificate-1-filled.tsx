import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCertificate1Filled = ({
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
    <path d="M896 42.688v938.624H128V42.688zm-170.688 512H298.688V640h426.624zM640 725.312H298.688v85.376H640zM469.312 128H298.688v234.688l85.312-70.4 85.312 70.4z" />
  </svg>
);
export default SvgCertificate1Filled;
