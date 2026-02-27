import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaskDoubleFilled = ({
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
    <path d="M512 0v85.312h128V0h85.312v85.312H896v725.376H256V85.312h170.624V0zm-42.688 640h213.312v-85.312H469.312zM170.624 256v640H640v85.312H85.312V256z" />
  </svg>
);
export default SvgTaskDoubleFilled;
