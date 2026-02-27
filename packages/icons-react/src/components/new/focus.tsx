import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFocus = ({
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
    <path d="M554.688 42.688v130.56a341.504 341.504 0 0 1 296 296.064h130.688v85.312H850.688a341.504 341.504 0 0 1-296 296.064v130.624h-85.312V850.688a341.504 341.504 0 0 1-296.064-296.064H42.688v-85.312h130.624a341.504 341.504 0 0 1 296.064-296V42.688zM512 256a256 256 0 1 0 0 512 256 256 0 0 0 0-512m-85.312 256a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0" />
  </svg>
);
export default SvgFocus;
