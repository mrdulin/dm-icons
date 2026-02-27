import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackup = ({
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
    <path d="M512.314 170.688A234.69 234.69 0 0 0 278.074 390.4l-2.048 33.408-32.896 5.952a192.064 192.064 0 0 0 34.56 380.928h469.312a192 192 0 0 0 34.496-380.928l-32.896-5.952-2.112-33.408a234.69 234.69 0 0 0-234.176-219.712m-315.776 182.72a320.064 320.064 0 0 1 631.552 0A277.44 277.44 0 0 1 747.002 896H277.626a277.312 277.312 0 0 1-81.088-542.592m315.776-51.072 188.352 188.352-60.352 60.288-85.312-85.312v259.648h-85.376V465.664l-85.312 85.376-60.352-60.288z" />
  </svg>
);
export default SvgBackup;
