import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileExcel = ({
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
    <path d="M128 42.688h529.664L896 280.96v700.288H128zM213.312 128v768h597.376V384h-256V128zM640 145.664v152.96h152.96L640 145.728zm0 280.96v70.272c0 23.168-9.408 45.376-26.112 61.44l-40.448 39.04 40.448 38.976c16.64 16 26.112 38.208 26.112 61.44V768h-85.312v-70.272L512 656.64l-42.688 41.152V768H384v-70.272c0-23.168 9.408-45.312 26.112-61.44l40.448-38.976-40.448-38.976A85.31 85.31 0 0 1 384 496.896v-70.208h85.312v70.208L512 538.048l42.688-41.152v-70.208H640z" />
  </svg>
);
export default SvgFileExcel;
