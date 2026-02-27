import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSetting = ({
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
    <path d="m512 36.096 412.16 237.952v475.904L512 987.968 99.84 749.952V274.048zm0 98.56L185.152 323.264v377.344L512 889.408l326.848-188.736V323.328L512 134.592zM512 384a128 128 0 1 0 0 256 128 128 0 0 0 0-256M298.624 512a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0" />
  </svg>
);
export default SvgSetting;
