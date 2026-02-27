import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserBlocked = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m512 298.688A149.312 149.312 0 0 0 636.608 839.04L839.04 636.608a148.54 148.54 0 0 0-71.04-17.92m131.392 78.272L696.896 899.392A149.312 149.312 0 0 0 899.328 696.96zM533.312 768a234.688 234.688 0 1 1 469.312 0 234.688 234.688 0 0 1-469.312 0m-192-85.312a170.69 170.69 0 0 0-170.688 170.624h300.8v85.376H85.376v-85.376a256 256 0 0 1 256-256h128v85.376h-128z" />
  </svg>
);
export default SvgUserBlocked;
