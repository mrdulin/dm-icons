import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderExportFilled = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52v377.472A277.312 277.312 0 0 0 521.92 896H42.688V106.624zm977.472 661.376L812.8 558.4l-60.672 60.032L857.92 725.44H554.56v85.312h303.36L752.128 917.76l60.672 60.032L1020.16 768z" />
  </svg>
);
export default SvgFolderExportFilled;
