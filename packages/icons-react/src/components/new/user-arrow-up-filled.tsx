import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserArrowUpFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376M768 537.344 977.664 744.64l-60.032 60.672L810.624 699.52v303.36h-85.312V699.52L618.304 805.312l-59.968-60.672L768 537.28zm-218.624 59.968A276.16 276.16 0 0 0 490.624 768c0 64.384 21.952 123.584 58.752 170.688H85.312v-85.376a256 256 0 0 1 256-256h208z" />
  </svg>
);
export default SvgUserArrowUpFilled;
