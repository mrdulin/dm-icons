import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapBlockedFilled = ({
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
    <path d="M320 115.904 85.312 252.864v664.448L320 820.608v-704.64zm85.312 690.88 98.624 58.24A298.56 298.56 0 0 1 618.624 466.56V217.216L405.312 91.2zm533.312-700.16v373.568A299.78 299.78 0 0 0 704 433.472V203.456l234.688-96.768zM768 490.624A234.688 234.688 0 1 0 768 960a234.688 234.688 0 0 0 0-469.376M618.624 725.312A149.312 149.312 0 0 1 839.04 593.92L636.608 796.352a148.54 148.54 0 0 1-17.92-71.04zm78.272 131.392 202.496-202.432A149.312 149.312 0 0 1 696.96 856.704z" />
  </svg>
);
export default SvgMapBlockedFilled;
