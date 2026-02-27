import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPenFilled = ({
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
    <path d="M963.2 390.272 630.144 57.216 552 199.872A298.7 298.7 0 0 1 393.216 336.64l-212.288 78.08-50.944 418.816L469.44 494.144l60.352 60.352-339.456 339.392 418.816-50.944 78.464-214.848a298.7 298.7 0 0 1 133.632-157.632z" />
  </svg>
);
export default SvgPenFilled;
