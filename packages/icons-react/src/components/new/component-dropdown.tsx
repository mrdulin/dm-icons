import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentDropdown = ({
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
    <path d="M85.312 85.312h853.312V384H85.312zm85.312 85.376v128h682.688v-128zm0 298.688v384h682.688v-384h85.312v469.312H85.312V469.376zM256 512h512v85.376H256zm0 170.688h512V768H256z" />
  </svg>
);
export default SvgComponentDropdown;
