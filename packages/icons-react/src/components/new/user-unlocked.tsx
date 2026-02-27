import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserUnlocked = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m512 277.312a53.31 53.31 0 0 0-53.376 53.376v32H960V960H576V682.688h53.376v-32a138.688 138.688 0 0 1 236.416-98.368L896 582.4l-60.16 60.544-30.272-30.08A53.06 53.06 0 0 0 768 597.248zM661.248 768v106.688H874.56V768zm-319.936-85.312a170.69 170.69 0 0 0-170.688 170.624H492.8v85.376H85.312v-85.376a256 256 0 0 1 256-256h149.312v85.376z" />
  </svg>
);
export default SvgUserUnlocked;
