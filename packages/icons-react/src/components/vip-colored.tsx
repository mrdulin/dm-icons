import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVipColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 20"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect width={36} height={20} fill="#D3BB99" rx={2} />
      <path
        fill="#151B24"
        fillRule="nonzero"
        d="M4 17h28v1H4zM4 2h28v1H4zm14.947 4v8h-2.012V6zm6.035 0A3.01 3.01 0 0 1 28 9c0 1.657-1.351 3-3.018 3H22.97v2h-2.012V6zM10.138 6l1.872 5.113L13.882 6h2.137l-3.003 7.964h-2.012L8 6zm14.844 2H22.97v2h2.012c.556 0 1.006-.448 1.006-1s-.45-1-1.006-1"
      />
    </g>
  </svg>
);
export default SvgVipColored;
