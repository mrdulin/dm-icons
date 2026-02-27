import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgApi = ({
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
    <path d="m24.96 512 188.352-188.352L273.664 384l-128 128 128 128-60.352 60.352L25.024 512zm298.688-298.688L512 25.024l188.352 188.288L640 273.664l-128-128-128 128zM384 750.272l128 128 128-128 60.352 60.416L512 999.04 323.648 810.688 384 750.336zm85.248-195.52v-85.504h85.504v85.504zM750.336 640l128-128-128-128 60.352-60.352L999.04 512 810.688 700.352z" />
  </svg>
);
export default SvgApi;
