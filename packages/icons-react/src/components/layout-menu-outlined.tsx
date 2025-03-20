import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayoutMenuOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <rect width={23} height={23} x={0.5} y={0.5} stroke="#B8CAE6" rx={4} />
      <path
        fill="currentColor"
        d="M6.818 3.273h.273a4.364 4.364 0 0 1 4.364 4.363v3.819H6.818a4.09 4.09 0 0 1 0-8.182m10.364 0h-.273a4.364 4.364 0 0 0-4.364 4.363v3.819h4.637a4.09 4.09 0 0 0 0-8.182M6.818 20.727h.273a4.364 4.364 0 0 0 4.364-4.363v-3.819H6.818a4.09 4.09 0 0 0 0 8.182m10.364 0h-.273a4.364 4.364 0 0 1-4.364-4.363v-3.819h4.637a4.09 4.09 0 0 1 0 8.182"
      />
    </g>
  </svg>
);
export default SvgLayoutMenuOutlined;
