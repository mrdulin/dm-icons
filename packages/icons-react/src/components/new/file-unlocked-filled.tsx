import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileUnlockedFilled = ({
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
    <path d="M554.688 42.688H128v938.624h362.688v-256A277.312 277.312 0 0 1 896 479.232V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM714.688 672a53.312 53.312 0 0 1 90.944-37.824l30.272 30.08 60.16-60.544-30.272-30.08A138.688 138.688 0 0 0 629.376 672v32H576v277.312h384V704H714.688z" />
  </svg>
);
export default SvgFileUnlockedFilled;
