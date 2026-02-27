import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextformatBold = ({
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
    <path d="M256 128h-42.688v768h384a213.312 213.312 0 0 0 103.936-399.68A213.312 213.312 0 0 0 554.688 128zm298.624 341.312h-256v-256h256a128 128 0 0 1 0 256m-256 85.376h298.688a128 128 0 1 1 0 256H298.624z" />
  </svg>
);
export default SvgTextformatBold;
