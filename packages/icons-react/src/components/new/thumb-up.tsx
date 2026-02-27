import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbUp = ({
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
    <path d="m464.128 59.008 54.592 9.088a170.69 170.69 0 0 1 142.592 168.32v104.96h226.944c52.736 0 92.864 47.36 84.224 99.328l-71.168 426.688a85.31 85.31 0 0 1-84.16 71.296H298.624V460.8L464.128 58.944zM516.8 155.2 384 477.76v375.552h433.152l71.104-426.624H576V236.416c0-37.504-24.32-70.016-59.136-81.216zM170.624 426.688v512H85.312v-512z" />
  </svg>
);
export default SvgThumbUp;
