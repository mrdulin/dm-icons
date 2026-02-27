import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShrinkHorizontal = ({
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
    <path d="M64 469.312h216.96L174.4 362.688l60.352-60.352L444.352 512 234.688 721.664l-60.352-60.352L280.96 554.688H64zM554.688 128v768h-85.376V128zm24.96 384 209.664-209.664 60.352 60.352L743.04 469.312H960v85.376H743.04l106.624 106.624-60.352 60.352z" />
  </svg>
);
export default SvgShrinkHorizontal;
