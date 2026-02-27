import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderSearchFilled = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52v349.376a266.688 266.688 0 1 0-416 333.312H42.624V106.688zM981.376 736c0 40.512-11.904 78.208-32.384 109.888l71.36 71.488-60.416 60.288-71.232-71.424A202.688 202.688 0 1 1 981.376 736M896 736a117.312 117.312 0 1 0-34.624 83.2l.32-.32C882.944 797.632 896 768.32 896 736" />
  </svg>
);
export default SvgFolderSearchFilled;
