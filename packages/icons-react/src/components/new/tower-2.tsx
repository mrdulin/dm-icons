import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTower2 = ({
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
    <path d="m512 24.96 126.848 126.848L679.936 768h45.44v213.312H298.688V768h45.44l41.024-616.192L512 25.024zM429.632 768h164.8L555.84 189.504 512 145.664l-43.776 43.84-38.592 578.56zM384 853.312V896h256v-42.688z" />
  </svg>
);
export default SvgTower2;
