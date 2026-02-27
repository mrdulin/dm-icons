import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBugFilled = ({
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
    <path d="M298.688 255.936a213.312 213.312 0 0 1 426.624 0zm-25.024 85.376-60.352-60.288V170.688H128v145.664l128 128V512H128v85.312h128v67.712l-128 128v145.664h85.312V828.352l58.048-58.048a256.38 256.38 0 0 0 197.952 164.8V341.312zm281.024 0v593.792a256.38 256.38 0 0 0 197.952-164.8l58.048 58.048v110.336H896V792.96l-128-128v-67.648h128V512H768v-67.648l128-128V170.688h-85.312V280.96l-60.352 60.288H554.688z" />
  </svg>
);
export default SvgBugFilled;
