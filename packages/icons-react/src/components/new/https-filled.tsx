import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHttpsFilled = ({
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
    <path d="M768 298.688V448h106.624v490.688H149.312V448H256V298.688a256 256 0 0 1 512 0m-426.688 0V448h341.312V298.688a170.688 170.688 0 1 0-341.312 0M512 608a85.312 85.312 0 1 0 0 170.688A85.312 85.312 0 0 0 512 608" />
  </svg>
);
export default SvgHttpsFilled;
