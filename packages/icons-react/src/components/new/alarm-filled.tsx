import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarmFilled = ({
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
    <path d="m64 337.664 231.04-231.04-60.352-60.288-231.04 231.04zm956.352-60.352-231.04-231.04-60.288 60.416 231.04 231.04zM512 128a426.688 426.688 0 1 0 0 853.312A426.688 426.688 0 0 0 512 128m128 615.04L469.376 572.352V320h85.312v216.96l145.664 145.728z" />
  </svg>
);
export default SvgAlarmFilled;
