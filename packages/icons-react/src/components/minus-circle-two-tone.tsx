import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMinusCircleTwoTone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={10} height={10} x={1} y={1} fillOpacity={0.2} rx={5} />
    <path d="M6 1.503a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-5.5 4.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m6-.503v.003h2.25v1h-5.5v-1H5.5z" />
  </svg>
);
export default SvgMinusCircleTwoTone;
