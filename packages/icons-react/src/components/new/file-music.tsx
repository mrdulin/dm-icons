import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileMusic = ({
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
    <path d="M128 42.688h529.664L896 280.96v700.288H128zm664.96 256L640 145.728v152.96zM554.752 128h-341.44v768h597.376V384h-256V128zM512 426.688h170.688V512h-85.376v170.688A106.688 106.688 0 1 1 512 578.112zm0 256a21.312 21.312 0 1 0-42.688 0 21.312 21.312 0 0 0 42.688 0" />
  </svg>
);
export default SvgFileMusic;
