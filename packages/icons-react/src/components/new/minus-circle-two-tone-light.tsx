import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMinusCircleTwoToneLight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillOpacity={0.1}
      d="M8 .667a7.333 7.333 0 1 0 0 14.666A7.333 7.333 0 0 0 8 .667"
    />
    <path
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M8 .667a7.333 7.333 0 1 0 0 14.666A7.333 7.333 0 0 0 8 .667m0 1a6.333 6.333 0 1 1 0 12.666A6.333 6.333 0 0 1 8 1.667"
      clipRule="evenodd"
    />
    <path d="M8.667 8.833H4.333v-1.5h7.334v1.5z" />
  </svg>
);
export default SvgMinusCircleTwoToneLight;
