import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTicketFilled = ({
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
    <path d="M42.688 170.688h938.688v215.04a128 128 0 0 0 0 252.48v215.104H42.688v-215.04a128 128 0 0 0 0-252.48zm640 298.624V384H341.376v85.312zm0 170.688v-85.312H341.376V640z" />
  </svg>
);
export default SvgTicketFilled;
