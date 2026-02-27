import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatOff = ({
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
    <path d="M999.04 938.688 85.312 25.024 25.024 85.376l39.04 39.04v844.352L293.312 768h414.272l231.04 231.04 60.352-60.416zm-376.704-256H261.312l-112 97.984V209.728zM960.128 768 960 85.312l-548.096.064-145.792-.128 85.504 85.44h523.072v511.808z" />
  </svg>
);
export default SvgChatOff;
