import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGamepadFilled = ({
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
    <path d="M936.128 128H87.936l-48 768h289.472l42.688-128h279.872l42.624 128h289.536zM469.376 405.312v85.376H384V576h-85.312v-85.312h-85.312v-85.376h85.312V320H384v85.312zM682.688 320h85.504v85.504h-85.504zm85.504 170.496V576h-85.504v-85.504z" />
  </svg>
);
export default SvgGamepadFilled;
