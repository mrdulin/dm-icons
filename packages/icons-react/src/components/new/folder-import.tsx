import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderImport = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52V896H512v-85.312h384v-512H448.832L363.52 192H128v352H42.688zM258.176 558.4l207.296 209.664-207.36 209.728-60.672-60.032 105.856-107.008H-.064V725.44h303.36L197.44 618.432z" />
  </svg>
);
export default SvgFolderImport;
