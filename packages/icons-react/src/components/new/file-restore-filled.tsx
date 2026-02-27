import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileRestoreFilled = ({
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
    <path d="M554.688 42.688H128v938.624h384a320 320 0 0 1 384-485.376V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM743.04 597.312l42.624-42.624-60.352-60.352L579.648 640l145.664 145.664 60.352-60.352-42.624-42.624H768a128 128 0 1 1-128 128V768h-85.312v42.688A213.312 213.312 0 1 0 768 597.312z" />
  </svg>
);
export default SvgFileRestoreFilled;
