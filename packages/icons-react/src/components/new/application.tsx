import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgApplication = ({
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
    <path d="m512 36.032 412.16 238.016v475.904L512 987.904 99.84 749.952V274.048zm0 98.56L185.152 323.328v377.344L512 889.408l326.848-188.736V323.328zm-139.84 232.96L512 460.672l139.84-93.248 47.36 71.04-144.576 96.32v147.84h-85.312v-147.84L324.8 438.528l47.36-71.04z" />
  </svg>
);
export default SvgApplication;
