import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileCode1Filled = ({
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
    <path d="M128 42.688h426.688V384H896v597.312H128zM396.48 819.52l60.352-60.352-76.48-76.48 76.48-76.608-60.352-60.288-136.832 136.832L396.48 819.456zm170.688-60.352 60.352 60.352 136.832-136.832L627.52 545.856l-60.352 60.288 76.48 76.544zM896 280.96v17.728H640v-256h17.664z" />
  </svg>
);
export default SvgFileCode1Filled;
