import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdit2 = ({
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
    <path d="m700.928 83.776 239.36 239.36-615.552 615.552H85.376v-239.36zm0 120.64L582.272 323.2l118.656 118.656L819.648 323.2l-118.72-118.72zm-60.352 297.728L521.92 383.488 170.688 734.656v118.72h118.72zm307.712 436.544H541.12v-85.312h407.168z" />
  </svg>
);
export default SvgEdit2;
