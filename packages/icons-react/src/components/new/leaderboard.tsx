import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeaderboard = ({
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
    <path d="M341.312 128h341.312v341.312h256V896H85.312V384h256zm85.312 682.688h170.688V213.312H426.624zm256 0h170.688v-256H682.624zm-341.312 0V469.312H170.624v341.376z" />
  </svg>
);
export default SvgLeaderboard;
