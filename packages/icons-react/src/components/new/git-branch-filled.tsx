import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitBranchFilled = ({
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
    <path d="M85.312 768a149.312 149.312 0 1 0 199.104-140.8C297.6 597.056 327.68 576 362.624 576h298.688A170.69 170.69 0 0 0 832 405.312v-6.144a149.376 149.376 0 1 0-85.376 0v6.144c0 47.168-38.208 85.376-85.312 85.376H362.624c-31.04 0-60.16 8.32-85.312 22.784V399.168a149.376 149.376 0 1 0-85.312 0v225.664A149.38 149.38 0 0 0 85.312 768" />
  </svg>
);
export default SvgGitBranchFilled;
