import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoomInFilled = ({
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
    <path d="M191.552 704.448a362.75 362.75 0 0 0 480.96 28.416l228.032 228.032 60.288-60.352L732.8 672.512a362.752 362.752 0 1 0-541.248 31.936m427.072-213.76h-128v128h-85.312v-128h-128v-85.376h128v-128h85.312v128h128z" />
  </svg>
);
export default SvgZoomInFilled;
