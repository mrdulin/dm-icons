import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseCircle = ({
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
    <path d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m469.376-384a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0M315.904 647.744 451.712 512 315.904 376.192l60.352-60.288L512 451.648l135.744-135.68 60.352 60.288L572.416 512l135.68 135.744-60.352 60.352-135.68-135.744-135.808 135.744z" />
  </svg>
);
export default SvgCloseCircle;
