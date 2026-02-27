import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCamera2Filled = ({
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
    <path d="M661.376 426.688H768v128L981.376 448.96v467.392L768 810.688v128H42.688v-512h66.176A149.312 149.312 0 1 1 323.2 218.88a213.376 213.376 0 1 1 338.112 207.808zm-307.648-55.552c-7.68 21.12-20.096 40.064-35.84 55.552h87.424a214.5 214.5 0 0 1-51.584-55.552" />
  </svg>
);
export default SvgVideoCamera2Filled;
