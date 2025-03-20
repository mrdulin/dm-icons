import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPauseOutlined = ({
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
    <g fill="currentColor">
      <path d="M6 14c0 .553-.358 1-.8 1H2.8c-.442 0-.8-.447-.8-1V2c0-.553.358-1 .8-1h2.4c.442 0 .8.447.8 1zM14 14c0 .553-.358 1-.8 1h-2.4c-.442 0-.8-.447-.8-1V2c0-.553.358-1 .8-1h2.4c.442 0 .8.447.8 1z" />
    </g>
  </svg>
);
export default SvgPauseOutlined;
