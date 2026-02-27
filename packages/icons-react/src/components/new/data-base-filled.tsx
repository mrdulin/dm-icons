import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDataBaseFilled = ({
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
    <path d="M840.64 366.4c-88 29.376-204.16 46.08-328.64 46.08s-240.64-16.704-328.704-46.08c-35.328-11.776-69.248-26.56-97.984-45.312v183.68c0 78.528 191.04 142.208 426.688 142.208s426.624-63.68 426.624-142.208v-183.68c-28.8 18.752-62.656 33.536-97.92 45.312zm97.984 274.56c-28.8 18.688-62.656 33.536-97.92 45.312-88.064 29.376-204.288 46.08-328.704 46.08-124.48 0-240.64-16.704-328.704-46.08-35.328-11.776-69.248-26.624-97.984-45.312v198.144c0 78.528 191.04 142.208 426.688 142.208s426.624-63.68 426.624-142.208V640.896zM512 327.104c-235.648 0-426.688-63.68-426.688-142.208v-.128C85.568 106.24 276.48 42.688 512 42.688c176.704 0 328.32 35.84 393.088 86.848 21.632 17.024 33.536 35.712 33.536 55.36 0 78.528-190.976 142.208-426.624 142.208" />
  </svg>
);
export default SvgDataBaseFilled;
