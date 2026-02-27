import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnimationFilled = ({
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
    <path d="M704 597.312a277.312 277.312 0 1 0 0-554.624 277.312 277.312 0 0 0 0 554.624m27.456 84.288a362.688 362.688 0 0 1-389.12-389.056A277.312 277.312 0 1 0 731.456 681.6m-192 192A362.688 362.688 0 0 1 150.4 484.48 277.312 277.312 0 1 0 539.456 873.6" />
  </svg>
);
export default SvgAnimationFilled;
