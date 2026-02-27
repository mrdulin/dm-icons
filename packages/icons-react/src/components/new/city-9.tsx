import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity9 = ({
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
    <path d="m341.696 77.952 170.24 106.368 170.24-106.368 272.32 163.392-43.904 73.216L896 305.728v632.96H127.872v-632.96l-14.72 8.832-43.84-73.216zm-128.512 176.64v598.72h85.44V640H384v213.312h85.12V258.24L340.8 178.048l-127.68 76.544zm341.44 598.72H640V640h85.312v213.312h85.312v-598.72l-127.616-76.544-128.384 80.192zM298.624 384h85.504v85.504h-85.504v-85.568zM640 384h85.44v85.504H640v-85.568z" />
  </svg>
);
export default SvgCity9;
