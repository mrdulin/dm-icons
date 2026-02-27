import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserPassword = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m469.312 192H896v85.312h-85.376v85.44h83.328L960 731.264V960H576V731.264l65.984-48.512h83.328zm-384 170.688a170.69 170.69 0 0 0-170.688 170.624H492.8v85.376H85.312v-85.376a256 256 0 0 1 256-256h149.312v85.376zm320 91.776v100.224h213.312V774.4l-8.64-6.4H669.952l-8.64 6.4z" />
  </svg>
);
export default SvgUserPassword;
