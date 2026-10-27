import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSend2Outlined = ({
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
    <g clipPath="url(#clip0_25101_15630)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.199.89a.716.716 0 0 1 .911.912l-4.504 12.87a.715.715 0 0 1-1.328.053l-2.463-5.54-5.54-2.462a.717.717 0 0 1-.284-1.08.7.7 0 0 1 .338-.249zM8.209 8.8l1.642 3.695 2.874-8.212zM3.504 6.148 7.199 7.79l4.515-4.515z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_25101_15630">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSend2Outlined;
