import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHtml5Filled = ({
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
    <path d="m941.184 42.688-46.848 819.52L512 1005.568l-382.336-143.36-46.848-819.52zm-608.96 256h371.52l73.408.704 4.928-86.08H241.92l17.92 314.752h418.752l-8.96 156.608L512 743.68l-157.696-59.136-2.112-36.352-1.856-47.808H264l8.32 144.576L512 834.88l239.68-89.856 17.28-302.272H340.48z" />
  </svg>
);
export default SvgHtml5Filled;
