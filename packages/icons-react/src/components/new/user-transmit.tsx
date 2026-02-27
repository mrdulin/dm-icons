import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserTransmit = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m536.64 238.72 156.8 122.944v65.088H586.56V661.44h198.592l-45.248-35.52 52.672-67.2zM341.312 682.688a170.69 170.69 0 0 0-170.688 170.624h332.8v85.376H85.376v-85.376a256 256 0 0 1 256-256h160v85.376h-160zm245.44 106.56h362.752v85.312H750.848l45.312 35.52-52.672 67.2-156.8-122.944v-65.088z" />
  </svg>
);
export default SvgUserTransmit;
