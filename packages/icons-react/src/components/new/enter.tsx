import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnter = ({
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
    <path d="M853.312 170.688v384a170.69 170.69 0 0 1-170.688 170.624H295.04L401.664 832l-60.352 60.352-209.664-209.664L341.312 472.96l60.352 60.288L294.976 640h387.648C729.728 640 768 601.792 768 554.688v-384h85.376z" />
  </svg>
);
export default SvgEnter;
