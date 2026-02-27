import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileAddFilled = ({
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
    <path d="M554.688 42.688H128v938.624h464a277.312 277.312 0 0 1 304-434.624V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM853.312 768V597.312H768V768H597.312v85.312H768V1024h85.312V853.312H1024V768z" />
  </svg>
);
export default SvgFileAddFilled;
