import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMosque = ({
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
    <path d="m554.816 85.44-.064 46.08a256.19 256.19 0 0 1 209.664 209.792h174.208v85.376H896v512H128v-512H85.312v-85.376H259.52A256.19 256.19 0 0 1 469.44 131.52V85.248zM346.688 341.312h330.56a170.752 170.752 0 0 0-330.56 0m-133.376 85.376v426.624h128v-256h341.312v256h128V426.688zm384 426.624V682.688H426.624v170.624z" />
  </svg>
);
export default SvgMosque;
