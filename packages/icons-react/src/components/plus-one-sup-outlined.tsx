import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlusOneSupOutlined = ({
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
    <path d="M2.506 3.088h1.64V4h-1.64v1.912H1.63V4H0v-.912h1.631V1.157h.875zM8 7H6.788V2.637q0-.216.005-.44l.009-.457q.004-.23.013-.426-.09.098-.205.235-.113.138-.25.265l-.674.627-.62-.765L6.961 0H8z" />
  </svg>
);
export default SvgPlusOneSupOutlined;
