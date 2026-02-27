import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExtensionOffFilled = ({
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
    <path d="m85.504 25.152-.192-.128-60.288 60.288 85.312 85.376h-24.96v256a128 128 0 1 1 0 256v256h256a128 128 0 1 1 256 0h256v-24.96l85.312 85.312 60.16-60.16L85.312 25.344zm777.472 657.152a128 128 0 0 0-9.6-255.616v-256h-256a128 128 0 0 0-255.68-9.6z" />
  </svg>
);
export default SvgExtensionOffFilled;
