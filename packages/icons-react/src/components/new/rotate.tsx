import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRotate = ({
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
    <path d="M512 128a384 384 0 1 0 352.064 537.6l17.088-39.104 78.208 34.176-17.088 39.04A469.44 469.44 0 0 1 42.688 512a469.312 469.312 0 0 1 938.688 0v85.312L793.6 456.512l51.2-68.224 39.68 29.696A384.13 384.13 0 0 0 512 128" />
  </svg>
);
export default SvgRotate;
