import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdit1 = ({
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
    <path d="M717.952 60.416 963.52 305.92 330.88 938.688H85.312V693.12zm0 370.368 124.864-124.8-124.8-124.928L593.024 305.92l124.864 124.864zM532.8 366.272l-362.176 362.24v124.8h124.864l362.176-362.176-124.864-124.8z" />
  </svg>
);
export default SvgEdit1;
