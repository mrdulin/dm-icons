import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuUnfold = ({
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
    <path d="M85.376 170.688h853.312V256H85.376zm-.128 256h323.904L247.232 608zm384.128 42.624h469.312v85.376H469.376v-85.44zM85.376 768h853.312v85.312H85.376z" />
  </svg>
);
export default SvgMenuUnfold;
