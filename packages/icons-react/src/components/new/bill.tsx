import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBill = ({
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
    <path d="M85.312 85.312h853.312v85.376h-85.312V942.08L784 886.656l-78.592-62.848-69.12 61.44L608 910.4l-28.352-25.152L512 825.088l-67.648 60.16L416 910.4l-28.352-25.152-69.12-61.44-78.592 62.848-69.312 55.424V170.688H85.312zM256 170.688v593.92l37.312-29.952 28.16-22.4 26.88 23.872L416 796.288l67.648-60.16L512 710.912l28.352 25.216L608 796.288l67.648-60.16 26.88-23.936 28.16 22.464L768 764.544v-593.92H256zm85.312 128h341.312V384H341.312zm85.312 170.624H384v85.376h256v-85.376z" />
  </svg>
);
export default SvgBill;
