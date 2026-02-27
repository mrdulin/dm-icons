import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlashlight = ({
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
    <path d="M170.688 0h682.688v316.352l-128 128V1024H298.688V444.352l-128-128zM256 85.312v64h512v-64zm512 149.376H256v46.336l128 128v529.664h256V408.96l128-128v-46.336zm-298.624 192h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgFlashlight;
