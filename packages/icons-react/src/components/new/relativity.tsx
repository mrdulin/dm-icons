import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRelativity = ({
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
    <path d="M85.312 85.312H640V384h298.624v554.688H384V640H85.312V85.376zm384 554.688v213.376h384v-384H640V640zm85.312-256V170.688h-384v384H384V384zm0 85.312h-85.312v85.376h85.312v-85.312z" />
  </svg>
);
export default SvgRelativity;
