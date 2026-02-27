import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCart = ({
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
    <path d="M0 42.688h203.264L226.496 128h771.392l-156.48 469.312h-509.44l-21.312 85.376h628.032V768h-737.28l53.12-212.864L138.112 128H0zM331.264 512h448.64l99.584-298.688H249.792zm-160.64 384a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.624 0zM768 896a85.312 85.312 0 1 1 170.688 0A85.312 85.312 0 0 1 768 896" />
  </svg>
);
export default SvgCart;
