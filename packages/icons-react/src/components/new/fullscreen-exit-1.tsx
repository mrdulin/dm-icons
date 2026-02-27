import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFullscreenExit1 = ({
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
    <path d="M597.376 853.312v-256h256v85.376H682.688v170.624zm-256 0V682.688H170.688v-85.376h256v256zm512-426.624h-256v-256h85.312v170.624h170.688zm-426.688 0h-256v-85.376h170.688V170.688h85.312z" />
  </svg>
);
export default SvgFullscreenExit1;
