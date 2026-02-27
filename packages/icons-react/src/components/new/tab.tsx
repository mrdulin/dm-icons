import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTab = ({
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
    <path d="M960 853.312H64V768h896zm0-682.624v512H704v-512zM874.688 256h-85.376v341.312h85.376zM640 170.688v512H384v-512zM554.688 256h-85.376v341.312h85.376zM320 170.688v512H64v-512zM234.688 256h-85.376v341.312h85.376z" />
  </svg>
);
export default SvgTab;
