import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderImportFilled = ({
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
    <path d="M42.752 106.688h361.856l85.312 106.624h491.52V896H480.832a277.312 277.312 0 0 0-438.08-328.128zm422.784 661.376L258.176 558.4l-60.672 60.032L303.296 725.44H0v85.312h303.36L197.44 917.76l60.736 59.968 207.296-209.664z" />
  </svg>
);
export default SvgFolderImportFilled;
