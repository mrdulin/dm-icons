import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculation1Filled = ({
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
    <path d="M981.376 42.688v938.624H42.688V42.688zM384 298.688v-85.376h-85.312v85.312h-85.312V384h85.312v85.312H384V384h85.376v-85.312zm426.688 0h-256V384h256zM341.376 622.336 280.96 561.92l-60.352 60.352 60.352 60.288-60.352 60.352 60.352 60.352 60.352-60.352 60.352 60.352 60.288-60.352L401.6 682.56l60.352-60.288L401.6 561.92l-60.288 60.352zM810.688 576h-256v85.312h256zm0 128h-256v85.312h256z" />
  </svg>
);
export default SvgCalculation1Filled;
