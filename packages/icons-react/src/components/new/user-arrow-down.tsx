import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserArrowDown = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m554.624 192v303.36l107.008-105.856 60.032 60.672L768 977.536l-209.664-207.36 59.968-60.672 107.008 105.792V512zM341.312 682.688a170.69 170.69 0 0 0-170.688 170.624h375.552v85.376H85.312v-85.376a256 256 0 0 1 256-256H544v85.376z" />
  </svg>
);
export default SvgUserArrowDown;
