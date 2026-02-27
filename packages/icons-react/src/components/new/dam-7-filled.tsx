import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam7Filled = ({
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
    <path d="M265.344 42.688h493.312l42.624 170.624H896v640h42.624v85.376H704v-384H320v384H85.312v-85.376H128v-640h94.72l42.56-170.624zm45.312 170.624h402.688L691.968 128H332.032l-21.312 85.312zm94.656 725.376V640h213.312v298.688z" />
  </svg>
);
export default SvgDam7Filled;
