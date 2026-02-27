import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarmAddFilled = ({
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
    <path d="m64 337.664 231.04-231.04-60.352-60.288-231.04 231.04zm956.352-60.352-231.04-231.04-60.288 60.416 231.04 231.04zM512 128a426.688 426.688 0 1 0 0 853.312A426.688 426.688 0 0 0 512 128m213.376 469.312H554.688V768h-85.312V597.312H298.688V512h170.688V341.312h85.312V512h170.688z" />
  </svg>
);
export default SvgAlarmAddFilled;
