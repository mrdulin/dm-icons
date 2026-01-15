import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPieChartFilled2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillOpacity={0.7} clipPath="url(#clip0_13380_12516)">
      <path d="M7.926 7.904h5.917v.65c0 3.673-2.937 6.651-6.558 6.651S.728 12.227.728 8.555s2.936-6.65 6.557-6.65h.641z" />
      <path
        fillRule="evenodd"
        d="M9.5.611c3.077 0 5.572 2.53 5.572 5.65v.651H8.86v-6.3zm.642 5h3.6c-.279-1.881-1.745-3.369-3.6-3.651z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_13380_12516">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPieChartFilled2;
