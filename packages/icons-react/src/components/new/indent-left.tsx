import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIndentLeft = ({
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
    <path d="M85.376 170.688V256h853.312v-85.312zm256 298.624v85.376h597.312v-85.376zM85.376 768h853.312v85.312H85.376zM67.712 512l135.68 135.744 60.416-60.352L188.352 512l75.456-75.52-60.352-60.288-135.744 135.68z" />
  </svg>
);
export default SvgIndentLeft;
