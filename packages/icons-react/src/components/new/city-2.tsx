import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity2 = ({
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
    <path d="m256 29.76 170.624 142.272v291.52L640 285.76l298.624 248.96v403.904H85.312V172.032zm170.624 823.552H512v-256h256v256h85.312V574.72L640 396.8 426.624 574.656zm256 0V682.624h-85.312v170.688zm-341.312 0v-641.28L256 140.8l-85.376 71.168v641.344z" />
  </svg>
);
export default SvgCity2;
