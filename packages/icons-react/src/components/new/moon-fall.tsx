import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoonFall = ({
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
    <path d="m465.728 67.648-19.2 71.424c-12.8 47.616-11.52 99.712 3.008 153.792a298.688 298.688 0 0 0 419.84 190.976l65.792-32.064-4.48 72.96c-2.624 44.16-16 87.936-39.168 134.4l-19.072 38.144-76.352-38.208 19.072-38.144c5.696-11.328 10.496-22.08 14.464-32.448a384 384 0 0 1-462.528-273.536A409.2 409.2 0 0 1 352.64 193.28a341.44 341.44 0 0 0-177.664 393.984c.704 2.624 3.648 10.752 7.424 20.48l4.48 11.392 1.408 3.52.384.96.128.256 16.128 39.552-79.04 32.192-16.128-39.488-.128-.384-.448-1.088-1.536-3.84-4.864-12.224a348 348 0 0 1-10.24-29.248A426.69 426.69 0 0 1 394.24 86.784zM42.688 768h354.24L512 844.8 627.072 768h354.304v85.376H652.928L512 947.328l-140.928-93.952H42.688z" />
  </svg>
);
export default SvgMoonFall;
