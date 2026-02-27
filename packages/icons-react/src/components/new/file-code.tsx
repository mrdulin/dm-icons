import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileCode = ({
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
    <path d="M128.064 42.688h529.664l238.336 238.336v273.664h-85.312V384.064h-256V128H213.376v768h256v85.312H128.064zm512 103.04v152.96h152.96zm369.664 505.216L891.264 768.192l118.4 117.248-59.968 60.672-179.776-177.92 179.776-177.92zM554.688 896h192v85.312h-192z" />
  </svg>
);
export default SvgFileCode;
