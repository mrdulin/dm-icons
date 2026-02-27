import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatSettingFilled = ({
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
    <path d="M64 85.312h896v432.064A256 256 0 0 0 558.208 768H293.376L64 968.704zm789.248 496.704v-48.64H768v48.64a149.2 149.2 0 0 0-59.968 34.688l-42.24-24.32-42.624 73.856 42.24 24.32a149.76 149.76 0 0 0 0 69.312l-42.24 24.32 42.624 73.92 42.368-24.384a149.1 149.1 0 0 0 59.84 34.56v48.832h85.312v-48.832a149.1 149.1 0 0 0 59.904-34.56l42.304 24.448 42.688-73.92-42.24-24.384a149.8 149.8 0 0 0 0-69.248l42.24-24.384-42.688-73.92-42.176 24.32a149.25 149.25 0 0 0-60.032-34.624zM746.624 725.12a64 64 0 1 1 128 0 64 64 0 0 1-128 0" />
  </svg>
);
export default SvgChatSettingFilled;
