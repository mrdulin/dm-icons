import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHtml5 = ({
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
    <path d="M82.816 42.688h858.368l-46.848 819.52L512 1005.568l-382.336-143.36zM173.184 128l38.464 673.792L512 914.432l300.288-112.64L850.816 128zm68.736 85.312h540.16l-4.928 86.08-73.408-.704h-371.52l8.256 144.064h428.48l-17.28 302.272L512 834.88l-239.744-89.856L264 600.448h86.4l1.792 47.808 2.112 36.416L512 743.68l157.696-59.136L678.656 528H259.84z" />
  </svg>
);
export default SvgHtml5;
