import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddCircleColor = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#clip0_8415_41799)">
      <path fill="#0F2F50" d="M11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0" />
      <path
        fill="#1890FF"
        d="M6 1.502a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-5.5 4.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m6-2.75v2.25h2.25v1H6.5v2.25h-1v-2.25H3.25v-1H5.5v-2.25z"
      />
    </g>
    <defs>
      <clipPath id="clip0_8415_41799">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddCircleColor;
