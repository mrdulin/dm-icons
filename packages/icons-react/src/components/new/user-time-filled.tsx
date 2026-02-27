import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserTimeFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376m277.376 448a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376m42.624 337.664-85.312-85.312v-113.6h85.312v78.272l60.352 60.352zM522.88 597.312A297.3 297.3 0 0 0 469.248 768c0 63.424 19.84 122.24 53.504 170.688H85.312v-85.376a256 256 0 0 1 256-256h181.504z" />
  </svg>
);
export default SvgUserTimeFilled;
