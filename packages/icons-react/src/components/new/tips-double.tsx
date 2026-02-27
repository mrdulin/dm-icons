import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTipsDouble = ({
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
    <path d="M896 298.688H256V768h209.664L576 878.336 686.272 768H896zm85.312 554.624H721.664L576 999.04 430.336 853.312H170.624v-640h810.688zm-170.688-704h-704v512H21.312V64h789.312z" />
  </svg>
);
export default SvgTipsDouble;
