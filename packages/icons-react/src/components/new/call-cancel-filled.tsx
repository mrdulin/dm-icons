import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallCancelFilled = ({
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
    <path d="m789.44 174.4-90.56-90.56-60.288 60.288 90.496 90.56-90.496 90.496 60.288 60.352 90.56-90.56 90.496 90.56 60.352-60.352-90.56-90.496 90.56-90.56-60.352-60.288-90.496 90.496zM408.768 85.312H42.688V128c0 170.56 50.112 329.6 136.32 462.976a857.7 857.7 0 0 0 254.08 253.952A849.54 849.54 0 0 0 896 981.312h42.688v-366.08l-285.44-63.36-79.36 79.232A600.8 600.8 0 0 1 392.96 450.112l79.36-79.36-63.488-285.44z" />
  </svg>
);
export default SvgCallCancelFilled;
