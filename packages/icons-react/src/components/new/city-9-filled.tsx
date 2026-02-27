import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity9Filled = ({
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
    <path d="M511.936 184.32 341.696 78.08 69.312 241.28l43.904 73.216 14.656-8.768v632.896h170.752V640H384v298.688h256V640h85.312v298.688H896v-632.96l14.592 8.832 43.904-73.216L682.112 78.016 511.872 184.32zM298.624 384h85.504v85.504h-85.504v-85.568zm426.88 0v85.504H640v-85.568h85.504z" />
  </svg>
);
export default SvgCity9Filled;
