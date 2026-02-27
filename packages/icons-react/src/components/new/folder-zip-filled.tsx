import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderZipFilled = ({
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
    <path d="m404.48 106.688 85.376 106.624h491.52V896H42.688V106.688h361.856zm192.896 704h85.504v-85.184h85.312V640H682.88v-85.12h85.312v-85.632H682.88v-85.12h85.312v-85.44h-85.504V384h-85.312v85.504h85.312v85.12h-85.312v85.568h85.312v85.12h-85.312z" />
  </svg>
);
export default SvgFolderZipFilled;
