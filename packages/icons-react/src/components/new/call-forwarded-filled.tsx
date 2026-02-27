import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallForwardedFilled = ({
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
    <path d="M408.768 85.312H42.688V128c0 170.56 50.112 329.6 136.32 462.912a857.6 857.6 0 0 0 254.08 254.08A849.54 849.54 0 0 0 896 981.248h42.688v-366.08l-285.44-63.36-79.36 79.232A600.8 600.8 0 0 1 392.96 450.112l79.36-79.36-63.488-285.44zM921.792 102.4l-231.168-4.928-1.856 85.312 90.432 1.92L638.656 325.12l60.352 60.352 140.544-140.48 1.92 90.368 85.312-1.792-4.992-231.232z" />
  </svg>
);
export default SvgCallForwardedFilled;
