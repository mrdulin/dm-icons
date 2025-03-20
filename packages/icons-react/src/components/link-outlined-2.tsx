import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkOutlined2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.812 6.928A4.058 4.058 0 0 0 9.075 1.19L6.21 4.057a1.014 1.014 0 0 0 1.433 1.435l2.866-2.865a2.028 2.028 0 1 1 2.868 2.868L10.512 8.36a1.014 1.014 0 1 0 1.434 1.433zM6.926 10.51l3.586-3.585a1.014 1.014 0 1 0-1.435-1.434L5.492 9.078a1.014 1.014 0 1 0 1.434 1.434zm-1.433 2.868c-.792.792-2.08.79-2.87 0a2.027 2.027 0 0 1 .002-2.87L5.49 7.645a1.01 1.01 0 0 0 0-1.434 1.01 1.01 0 0 0-1.434 0L1.19 9.075a4.054 4.054 0 0 0 0 5.738 4.06 4.06 0 0 0 5.737 0l2.866-2.867a1.014 1.014 0 1 0-1.434-1.434l-2.867 2.866" />
  </svg>
);
export default SvgLinkOutlined2;
