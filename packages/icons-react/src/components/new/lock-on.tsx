import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockOn = ({
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
    <path d="M512 128a170.69 170.69 0 0 0-170.688 170.688v128h341.312v-128A170.69 170.69 0 0 0 512 128m256 298.688h106.624v512H149.312v-512H256v-128a256 256 0 1 1 512 0zM234.624 512v341.312h554.688V512zM384 640h256v85.312H384z" />
  </svg>
);
export default SvgLockOn;
