import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineStraightLineOutlined = ({
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
    <path d="M5.146 15.753a.5.5 0 0 0 .708.707l2.303-2.303a1.5 1.5 0 0 0 2-2l2-2a1.5 1.5 0 0 0 2-2l2.303-2.303a.5.5 0 0 0-.707-.708L13.45 7.45a1.5 1.5 0 0 0-2 2l-2 2a1.5 1.5 0 0 0-2 2z" />
  </svg>
);
export default SvgKlineStraightLineOutlined;
