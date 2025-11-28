import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineAbcdPatternOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21 5.5a1.5 1.5 0 0 1-1.753 1.479l-3.621 8.53A1.5 1.5 0 1 1 13.086 17H3.914a1.5 1.5 0 1 1-1.168-1.98l3.622-8.534A1.5 1.5 0 1 1 8.914 5h9.171A1.5 1.5 0 0 1 21 5.5m-2.915.5h-9.17a2 2 0 0 1-.078.181l5.144 8.911a1.5 1.5 0 0 1 .766-.072l3.622-8.534A1.5 1.5 0 0 1 18.085 6m-4.881 9.745L8.086 6.881a1.5 1.5 0 0 1-.84.098l-3.62 8.53a1.5 1.5 0 0 1 .289.491h9.17a1.5 1.5 0 0 1 .119-.255" />
  </svg>
);
export default SvgKlineAbcdPatternOutlined;
