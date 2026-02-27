import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbDown = ({
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
    <path d="m464.128 938.688 54.592-9.152a170.69 170.69 0 0 0 142.592-168.32V656.32h226.944c52.736 0 92.864-47.36 84.224-99.392l-71.168-426.624a85.31 85.31 0 0 0-84.16-71.296H298.624v477.76zm52.672-96.256L384 519.872V144.32h433.152l71.104 426.688H576v190.208c0 37.504-24.32 70.08-59.136 81.28zM170.624 571.008v-512H85.312v512z" />
  </svg>
);
export default SvgThumbDown;
