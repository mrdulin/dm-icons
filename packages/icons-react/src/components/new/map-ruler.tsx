import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapRuler = ({
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
    <path d="m676.608 9.216 333.248 333.248-674.432 674.496L2.112 683.712zm0 120.64-93.184 93.184 68.352 68.352-60.352 60.352-68.352-68.352-93.184 93.184 102.4 102.464L472 539.392 369.536 436.928l-93.184 93.184 68.352 68.352-60.352 60.352L216 590.464l-93.184 93.184 212.608 212.608 553.728-553.792z" />
  </svg>
);
export default SvgMapRuler;
