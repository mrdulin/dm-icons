import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileLocked = ({
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
    <path d="M128 42.688h529.664L896 280.96v188.288h-85.312V384h-256V128H213.312v768h277.376v85.312H128zm512 103.04v152.96h152.96zm128 472.96c29.44 0 53.312 23.872 53.312 53.312v32H714.688v-32c0-29.44 23.872-53.312 53.312-53.312M906.688 704v-32a138.688 138.688 0 0 0-277.376 0v32H576v277.312h384V704h-53.248zm-32.064 85.312V896H661.312V789.312z" />
  </svg>
);
export default SvgFileLocked;
