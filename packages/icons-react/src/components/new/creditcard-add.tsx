import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreditcardAdd = ({
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
    <path d="M42.688 128h938.688v384H896v-42.688H128v341.376h469.376V896H42.688zM128 384h768V213.312H128zm85.376 213.312h213.312v85.376H213.376zm682.624 0v128h128v85.376H896v128h-85.312v-128h-128v-85.376h128v-128z" />
  </svg>
);
export default SvgCreditcardAdd;
