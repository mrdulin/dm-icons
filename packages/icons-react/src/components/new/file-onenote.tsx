import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileOnenote = ({
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
    <path d="M128 42.688h529.664L896 280.96v700.288H128zM213.312 128v768h597.376V384h-256V128zM640 145.664v152.96h152.96L640 145.728zm-256 280.96h170.688C601.792 426.688 640 464.96 640 512v256h-85.312V512h-85.376v256H384V426.688z" />
  </svg>
);
export default SvgFileOnenote;
