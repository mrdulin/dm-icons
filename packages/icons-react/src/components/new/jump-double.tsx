import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJumpDouble = ({
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
    <path d="M938.624 85.312v597.376h-128v-85.376h42.688V170.688H426.624v42.624h-85.312v-128zM85.312 298.688h256V384H170.624v469.312H640V682.688h85.312v256h-640zm341.312 0h298.688v298.624H640v-152.96L426.624 657.664l-60.288-60.352L579.648 384h-152.96v-85.312z" />
  </svg>
);
export default SvgJumpDouble;
