import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHelpCircleFilled = ({
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
    <path d="M512 981.312a469.312 469.312 0 1 0 0-938.624 469.312 469.312 0 0 0 0 938.624m-7.36-473.984c18.368-22.656 41.536-41.6 60.16-56.256a85.312 85.312 0 1 0-133.248-95.552l-14.208 40.32-80.448-28.48 14.208-40.256A170.752 170.752 0 1 1 617.6 518.144c-18.432 14.464-34.88 28.352-46.72 43.008-11.776 14.4-16.192 26.048-16.192 36.16v53.376h-85.312v-53.376c0-36.928 16.64-67.136 35.2-89.984zm-35.264 271.488v-85.504h85.504v85.504z" />
  </svg>
);
export default SvgHelpCircleFilled;
