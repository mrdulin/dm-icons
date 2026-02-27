import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMultiply = ({
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
    <path d="M376.192 315.904 512 451.584l135.744-135.68 60.352 60.288L572.288 512l135.808 135.744-60.352 60.352L512 572.288 376.192 708.096l-60.288-60.352L451.584 512l-135.68-135.808z" />
  </svg>
);
export default SvgMultiply;
