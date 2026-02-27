import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreditcardOffFilled = ({
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
    <path d="m85.504 25.152-.192-.128-60.288 60.288L67.648 128h-24.96v256h280.96l85.376 85.376H42.688V896h792.96l103.04 103.04 60.16-60.16L85.312 25.344zM384 725.312H170.688V640H384zm597.312 75.328v-331.2H649.984l331.328 331.328zM564.672 384h416.64V128h-672.64z" />
  </svg>
);
export default SvgCreditcardOffFilled;
