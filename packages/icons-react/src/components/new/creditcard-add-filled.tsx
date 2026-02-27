import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreditcardAddFilled = ({
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
    <path d="M981.376 384V128H42.688v256zm0 85.376v101.888A234.688 234.688 0 0 0 656.64 896H42.688V469.376zM384 725.376V640H170.688v85.312H384zm512-.064v-128h-85.312v128h-128v85.376h128v128H896v-128h128v-85.376z" />
  </svg>
);
export default SvgCreditcardAddFilled;
