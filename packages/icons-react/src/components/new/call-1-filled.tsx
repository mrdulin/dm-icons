import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCall1Filled = ({
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
    <path d="m726.144 87.36-41.216-11.136-22.272 82.368 41.152 11.136a213.31 213.31 0 0 1 150.272 150.4l11.136 41.152 82.368-22.208-11.136-41.216A298.69 298.69 0 0 0 726.144 87.36m-39.04 144.128-41.152-11.136-22.336 82.368 41.216 11.136a64 64 0 0 1 45.056 45.12l11.136 41.216 82.368-22.208-11.072-41.216a149.31 149.31 0 0 0-105.216-105.28M408.768 85.312H42.688V128c0 170.56 50.112 329.6 136.32 462.912a857.6 857.6 0 0 0 254.08 254.08A849.54 849.54 0 0 0 896 981.248h42.688v-366.08l-285.44-63.36-79.36 79.232A600.8 600.8 0 0 1 392.96 450.112l79.36-79.36-63.488-285.44z" />
  </svg>
);
export default SvgCall1Filled;
