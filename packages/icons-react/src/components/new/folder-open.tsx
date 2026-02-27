import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderOpen = ({
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
    <path d="M42.688 106.688h447.168l85.312 106.624h406.208v85.376H534.208L448.832 192H42.688zm0 170.624h361.856L489.856 384h491.52v512H42.688zM128 362.688v448h768V469.312H448.832L363.52 362.688z" />
  </svg>
);
export default SvgFolderOpen;
