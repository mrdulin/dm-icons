import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileVibrateFilled = ({
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
    <path d="M810.624 42.688H213.312v938.624h597.312zM554.88 725.312v85.504h-85.568v-85.504h85.504zm-384.256 85.376V213.312H85.312v597.376zm768 0V213.312h-85.312v597.376z" />
  </svg>
);
export default SvgMobileVibrateFilled;
