import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaskMarked = ({
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
    <path d="M298.688 42.688h426.624V128H896v341.312h-85.312v-256h-85.376v85.376H298.688v-85.376h-85.376V896h320v85.312H128V128h170.688zM384 213.312h256V128H384zm245.312 341.184H992v439.232L810.816 882.112 629.312 993.664zm85.376 85.312v201.216l96.128-59.136 95.872 59.072V639.808z" />
  </svg>
);
export default SvgTaskMarked;
