import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamera1Filled = ({
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
    <path d="M405.312 426.688a106.688 106.688 0 1 1 213.376 0 106.688 106.688 0 0 1-213.376 0m-277.312 0a384 384 0 0 0 207.04 340.864L306.944 896h-93.632v85.312h597.376V896h-93.632L688.96 767.552A384 384 0 1 0 128 426.688m287.616 371.776a384.5 384.5 0 0 0 192.768 0L629.76 896H394.24l21.312-97.536zM320 426.624a192 192 0 1 1 384 0 192 192 0 0 1-384 0" />
  </svg>
);
export default SvgCamera1Filled;
