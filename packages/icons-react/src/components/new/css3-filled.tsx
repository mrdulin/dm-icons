import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCss3Filled = ({
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
    <path d="m941.184 42.688-46.848 819.52L512 1005.568l-382.336-143.36-46.848-819.52zM267.392 659.776v.128l4.864 85.12L512 834.88l239.68-89.856 17.28-302.272H466.432l311.04-148.928 4.608-80.512H233.92l11.264 85.824L512 298.752h57.664l-314.304 150.4 4.48 78.912h418.752l-8.96 156.608L512 743.68l-157.696-59.136-1.728-29.376-2.56-54.784h-85.76l3.136 59.328z" />
  </svg>
);
export default SvgCss3Filled;
