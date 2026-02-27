import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBuilding2 = ({
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
    <path d="m512 35.584 271.872 163.072-43.904 73.216-14.656-8.768v78.208h213.312v597.312H85.312V341.312h213.312v-78.208l-14.592 8.768-43.904-73.216zM384 211.84v129.408h256V211.904l-128-76.8-128 76.8zm85.312 1.28h85.504v85.568h-85.504v-85.44zM170.624 426.688v426.688h170.688V554.624h341.312v298.688h170.688V426.624H170.624zm426.688 426.688V640H426.624v213.312h170.688z" />
  </svg>
);
export default SvgBuilding2;
