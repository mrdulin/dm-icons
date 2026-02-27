import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileNavigation = ({
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
    <path d="M170.688 42.688h682.688v938.624H170.688zM256 128v768h512V128zm256 75.264L723.072 625.28 512 559.36l-211.008 65.92zm-44.928 280.768L512 469.952l44.992 14.08L512 394.048zm2.304 241.28h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgMobileNavigation;
