import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderDetails = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52V896H42.688zM128 192v618.688h768v-512H448.832L363.52 192zm170.624 320h85.504v85.504h-85.504v-85.568zm170.624 0h85.504v85.504h-85.504v-85.568zm170.688 0h85.504v85.504h-85.504v-85.568z" />
  </svg>
);
export default SvgFolderDetails;
