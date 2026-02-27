import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdit2Filled = ({
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
    <path d="m940.224 323.136-239.36-239.36-179.008 179.008 239.36 239.36zM700.864 562.56 461.504 323.2 85.312 699.328v239.36h239.36l376.192-376.192zM541.056 938.688h407.168v-85.312H541.056z" />
  </svg>
);
export default SvgEdit2Filled;
