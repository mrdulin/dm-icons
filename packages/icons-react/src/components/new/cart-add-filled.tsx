import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCartAddFilled = ({
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
    <path d="M203.264 42.688H0V128h138.048l116.48 427.136L201.472 768h737.28v-85.312H310.656l21.312-85.376h509.44L997.888 128H226.496l-23.168-85.312zm522.048 362.624H618.688V512h-85.376V405.312H426.688V320h106.624V213.312h85.376V320h106.624zM256 810.688a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624m597.312 0a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624" />
  </svg>
);
export default SvgCartAddFilled;
