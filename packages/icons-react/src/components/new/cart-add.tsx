import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCartAdd = ({
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
    <path d="M0 42.688h203.264l128 469.312h448.64L911.68 116.672l80.96 27.008-151.232 453.632h-509.44l-21.312 85.376h628.032V768h-737.28l53.12-212.864L138.112 128H0zm597.312 42.624v128h128v85.376h-128v128H512v-128H384v-85.376h128v-128zM170.688 896a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0M768 896a85.312 85.312 0 1 1 170.688 0A85.312 85.312 0 0 1 768 896" />
  </svg>
);
export default SvgCartAdd;
