import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserArrowUp = ({
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
    <path d="M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m512 217.344L977.664 744.64l-60.032 60.672L810.624 699.52v303.36h-85.312V699.52L618.304 805.312l-59.968-60.672L768 537.28zm-426.688 145.28a170.69 170.69 0 0 0-170.688 170.688h375.552v85.376H85.312v-85.376a256 256 0 0 1 256-256H544v85.376H341.312z" />
  </svg>
);
export default SvgUserArrowUp;
