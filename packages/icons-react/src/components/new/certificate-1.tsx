import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCertificate1 = ({
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
    <path d="M896 42.688v938.624H128V42.688zM554.688 128v277.312l-128-96-128 96V128h-85.376v768h597.376V128zM384 128v106.688l42.688-32 42.624 32V128zm-85.312 384h426.624v85.312H298.688zm0 170.688H640V768H298.688z" />
  </svg>
);
export default SvgCertificate1;
