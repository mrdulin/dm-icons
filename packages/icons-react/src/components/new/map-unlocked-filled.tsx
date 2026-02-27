import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapUnlockedFilled = ({
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
    <path d="M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88 85.312 50.368V704a277.12 277.12 0 0 1 128-233.728V217.216L405.312 91.2zm533.312-700.16v378.688A278.14 278.14 0 0 0 704 434.112v-230.72l234.688-96.704zm-224 544a53.312 53.312 0 0 1 90.944-37.824l30.272 30.08L896 582.4l-30.272-30.08a138.688 138.688 0 0 0-236.416 98.368v32h-53.376V960h384V682.688H714.624z" />
  </svg>
);
export default SvgMapUnlockedFilled;
