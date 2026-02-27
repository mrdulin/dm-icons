import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderAdd1 = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52V896H42.688zM128 192v618.688h768v-512H448.832L363.52 192zm426.688 192v128h128v85.312h-128v128h-85.312v-128h-128V512h128V384z" />
  </svg>
);
export default SvgFolderAdd1;
