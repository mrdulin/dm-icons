import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileOutlined3 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 27 34"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.284 33.903H1.404C.63 33.903 0 33.243 0 32.43V1.474C0 .66.629 0 1.405 0H18.26l8.428 8.844V32.43c0 .814-.629 1.474-1.405 1.474" />
    <path d="M18.26 0v7.37c0 .815.63 1.474 1.406 1.474h7.023z" />
  </svg>
);
export default SvgFileOutlined3;
