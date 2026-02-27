import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileUnlocked = ({
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
    <path d="M128 42.688h529.664L896 280.96v188.288h-85.312V384h-256V128H213.312v768h277.376v85.312H128zm512 103.04v152.96h152.96zm128 472.96A53.31 53.31 0 0 0 714.688 672v32h245.248v277.312H576V704h53.376v-32a138.688 138.688 0 0 1 236.416-98.368l30.272 30.08-60.16 60.544-30.272-30.08A53 53 0 0 0 768 618.688M661.312 789.312V896h213.312V789.312z" />
  </svg>
);
export default SvgFileUnlocked;
