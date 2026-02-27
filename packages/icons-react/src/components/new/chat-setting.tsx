import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatSetting = ({
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
    <path d="M64 85.312h896v384h-85.312V170.688H149.312v609.92l112-97.92h293.376V768H293.376L64 968.704zm789.312 448v48.64c22.72 6.784 43.2 18.88 59.968 34.752l42.24-24.32 42.624 73.856-42.24 24.32a149.76 149.76 0 0 1 0 69.312l42.24 24.32-42.624 73.92-42.368-24.384a149.1 149.1 0 0 1-59.84 34.56v48.832h-85.376v-48.832a149.1 149.1 0 0 1-59.84-34.56l-42.304 24.384-42.688-73.856 42.24-24.384a149.76 149.76 0 0 1 0-69.248l-42.24-24.384 42.688-73.92 42.176 24.32c16.768-15.808 37.248-27.904 59.968-34.624v-48.64h85.376zM810.624 661.12a64 64 0 1 0 0 128 64 64 0 0 0 0-128" />
  </svg>
);
export default SvgChatSetting;
