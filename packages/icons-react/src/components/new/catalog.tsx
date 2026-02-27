import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCatalog = ({
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
    <path d="M128 42.688h768v938.624H128zM213.312 128v768h597.376V128zm128 170.688h341.376V384H341.312zm0 170.624h341.376v85.376H341.312zm0 170.688h341.376v85.312H341.312z" />
  </svg>
);
export default SvgCatalog;
