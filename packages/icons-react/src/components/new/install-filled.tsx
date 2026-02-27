import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstallFilled = ({
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
    <path d="M554.624 388.672V85.312h-85.312v303.36L362.304 282.88l-59.968 60.672L512 550.848l209.664-207.36-60.032-60.608zM384 85.312H85.312v853.376h853.312V85.312H640v85.376h213.312v426.624H170.624V170.688H384zm-42.624 639.936v85.504h-85.504v-85.504zm128 0v85.504h-85.504v-85.504z" />
  </svg>
);
export default SvgInstallFilled;
