import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileZip = ({
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
    <path d="M128 42.688h529.664L896 280.96v700.288H128zM213.312 128v768h597.376V384h-256V128h-85.184v85.504h-85.312v85.12h85.312v85.568h-85.312v85.12h85.312v85.568h-85.312v85.376h-85.504v-85.568H384v-85.184h-85.312V384H384v-85.12h-85.312v-85.632H384V128zM640 145.664v152.96h152.96L640 145.728z" />
  </svg>
);
export default SvgFileZip;
