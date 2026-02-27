import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileImage = ({
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
    <path d="M128 42.688h529.664L896 280.96v700.288H128zM213.312 128v768h597.376V384h-256V128zM640 145.664v152.96h152.96L640 145.728zM341.312 469.312h85.568v85.568h-85.568zM543.04 552l173.376 173.312-60.352 60.352-112.96-112.96-68.8 68.8-27.84-33.472-29.824 28.864-48.768 48.768-60.352-60.352 49.28-49.28 96.512-93.248 26.816 32.192z" />
  </svg>
);
export default SvgFileImage;
