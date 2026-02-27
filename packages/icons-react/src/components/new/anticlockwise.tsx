import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnticlockwise = ({
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
    <path d="M184.896 213.312a128 128 0 0 1 128-128h241.792v85.376H312.896a42.69 42.69 0 0 0-42.688 42.624v277.376h-85.056L25.024 317.696l62.592-57.984 97.28 105.024zM341.312 256h640v640h-640zm85.312 85.312v469.376H896V341.376H426.624z" />
  </svg>
);
export default SvgAnticlockwise;
