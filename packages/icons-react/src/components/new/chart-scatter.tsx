import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartScatter = ({
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
    <path d="M170.624 85.312v768h768v85.376H85.312V85.312zM725.312 256A85.312 85.312 0 1 1 896 256a85.312 85.312 0 0 1-170.688 0m-256.064-42.688h85.504v85.568h-85.504zm-213.376 128h85.504v85.568h-85.504zm384 85.376h85.504v85.504h-85.504zM384 554.688a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0M725.248 640h85.504v85.504h-85.504zm-469.376 42.688h85.504v85.44h-85.504z" />
  </svg>
);
export default SvgChartScatter;
