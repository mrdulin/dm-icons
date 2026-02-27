import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCameraMusicFilled = ({
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
    <path d="M725.312 170.688H0v682.624h725.312v-182.4L1024 841.472v-660.8l-298.688 179.2zM512 298.688V384h-85.312v234.688a106.688 106.688 0 1 1-85.376-104.576V298.688z" />
  </svg>
);
export default SvgVideoCameraMusicFilled;
