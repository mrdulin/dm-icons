import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam6 = ({
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
    <path d="M128 85.312h768v213.376h42.624V384H896v469.376h42.624v85.312h-384v-85.312h42.688V640a85.312 85.312 0 1 0-170.688 0v213.376h42.688v85.312h-384v-85.312H128V384H85.312v-85.312H128V85.376zM213.312 384v469.376h128V640a170.688 170.688 0 1 1 341.312 0v213.376h128V384zm597.312-85.312v-128H213.312v128z" />
  </svg>
);
export default SvgDam6;
