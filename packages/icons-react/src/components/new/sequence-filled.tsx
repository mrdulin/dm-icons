import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSequenceFilled = ({
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
    <path d="M85.312 170.688h341.312v256h-128v426.624h-85.312V426.688h-128zm512 0h341.312v256h-128v426.624h-85.312V426.688h-128zm-58.24 344.96 160 167.04-160 166.976-61.568-59.008 62.528-65.28h-198.72V640h198.72l-62.592-65.28 61.568-59.072z" />
  </svg>
);
export default SvgSequenceFilled;
