import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgParentheses = ({
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
    <path d="m232.32 193.664-18.688 38.4A637.3 637.3 0 0 0 149.312 512c0 100.48 23.168 195.456 64.32 279.936l18.688 38.4-76.672 37.376-18.688-38.4A722.6 722.6 0 0 1 64 512c0-113.728 26.24-221.44 72.96-317.376l18.688-38.4zm636.032-37.376 18.688 38.4A722.6 722.6 0 0 1 960 512c0 113.728-26.24 221.44-72.96 317.376l-18.688 38.336-76.672-37.376 18.688-38.4A637.3 637.3 0 0 0 874.688 512c0-100.48-23.168-195.456-64.32-280l-18.688-38.4z" />
  </svg>
);
export default SvgParentheses;
