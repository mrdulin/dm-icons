import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseCircleFilled1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 11.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M4.409 3.702l1.59 1.59 1.592-1.59.707.707L6.707 6l1.59 1.59-.706.708L6 6.708l-1.591 1.59-.707-.707L5.292 6l-1.59-1.591z" />
  </svg>
);
export default SvgCloseCircleFilled1;
