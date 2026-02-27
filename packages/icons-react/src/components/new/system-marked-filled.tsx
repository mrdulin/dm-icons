import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemMarkedFilled = ({
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
    <path d="M981.376 85.312H42.688V768h490.688V597.248H128V170.56h768v298.752h85.376zM128 853.312h405.376v85.376H128zm853.376-298.816H618.688v439.168l181.44-111.552 181.248 111.616z" />
  </svg>
);
export default SvgSystemMarkedFilled;
