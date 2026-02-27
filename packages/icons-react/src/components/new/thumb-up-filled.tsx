import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbUpFilled = ({
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
    <path d="M518.784 68.096a170.69 170.69 0 0 1 142.592 168.32v104.96H888.32c52.736 0 92.864 47.36 84.16 99.328l-71.04 426.688a85.31 85.31 0 0 1-84.224 71.296H298.688V460.8L464.192 58.944zM170.688 938.688H85.376v-512h85.312z" />
  </svg>
);
export default SvgThumbUpFilled;
