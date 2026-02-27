import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrafficFilled = ({
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
    <path d="M768 85.312H256V256H128v85.312h128v128H128v85.376h128v128H128V768h128v170.688h512V768h128v-85.312H768v-128h128v-85.312H768v-128h128V256H768zm-341.312 213.44a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0m0 213.312a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0M512 640a85.312 85.312 0 1 1 0 170.688A85.312 85.312 0 0 1 512 640" />
  </svg>
);
export default SvgTrafficFilled;
