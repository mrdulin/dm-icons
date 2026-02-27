import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserLocked = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m512 277.312c29.44 0 53.312 23.872 53.312 53.376v32H714.624v-32c0-29.44 23.872-53.376 53.376-53.376m138.624 85.376v-32a138.688 138.688 0 1 0-277.312 0v32h-53.376V960h384V682.688zm-32 85.312v106.688H661.248V768H874.56zm-533.312-85.312a170.69 170.69 0 0 0-170.688 170.624H492.8v85.376H85.312v-85.376a256 256 0 0 1 256-256h149.312v85.376z" />
  </svg>
);
export default SvgUserLocked;
