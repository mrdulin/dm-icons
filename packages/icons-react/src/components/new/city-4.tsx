import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity4 = ({
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
    <path d="M789.312 73.344 640 192.832v164.8l-128-64-128 64v-164.8L234.624 73.344 85.312 192.832v745.856h853.312V192.832zM384 453.12l128-64 128 64v400.32h-85.376V682.752h-85.312V853.44H384V453.056zm-85.376 400.32h-128V233.92l64-51.2 64 51.2zm426.688 0V233.92l64-51.2 64 51.2v619.52zm-128-341.44H426.624v85.376h170.688z" />
  </svg>
);
export default SvgCity4;
