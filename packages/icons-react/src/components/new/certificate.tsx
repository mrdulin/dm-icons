import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCertificate = ({
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
    <path d="M42.688 128h938.688v768H42.688zM128 213.312v597.376h768V213.312h-85.312v277.376l-128-96-128 96V213.312zm512 0V320l42.688-32 42.688 32V213.312zm-426.624 256h256v85.376h-256zm0 170.688h597.312v85.312H213.376z" />
  </svg>
);
export default SvgCertificate;
