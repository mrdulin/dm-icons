import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileHashSymbolOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="m11.09 1 2.907 3.08v9.169c0 .967-.856 1.751-1.796 1.751H3.7c-.936-.004-1.7-.788-1.7-1.751V2.75C2 1.784 2.76 1 3.7 1zM9.666 2H3.832A.844.844 0 0 0 3 2.855v10.286c0 .471.372.855.832.855h8.333c.46 0 .832-.384.832-.855V5.427h-2.5a.844.844 0 0 1-.83-.856zM8.06 6.63 7.71 8.302h1.04l.347-1.672h.568l-.348 1.672h1.072l-.096.488H9.222l-.252 1.24h1.128l-.096.48H8.866l-.352 1.65h-.567l.351-1.65h-1.04l-.351 1.65h-.568l.352-1.65H5.619l.096-.48h1.08l.252-1.24H5.91l.096-.488h1.136L7.49 6.63zm.595 2.16h-1.04l-.251 1.24h1.04zM10.498 2V4.09a.41.41 0 0 0 .408.408h2.091z"
      />
    </g>
  </svg>
);
export default SvgFileHashSymbolOutlined;
