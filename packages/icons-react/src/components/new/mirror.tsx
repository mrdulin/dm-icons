import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMirror = ({
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
    <path d="M554.688 85.312v853.376h-85.312V85.376h85.312zM384 198.08v591.36H55.488L384 198.016zm256 0 328.512 591.36H640zM200.512 704h98.176V527.36zm524.8-176.64V704h98.176z" />
  </svg>
);
export default SvgMirror;
