import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilter3Filled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1088 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M489.728.064 638.72 340.928l340.8 148.928-340.8 148.864-148.928 340.864L340.8 638.72 0 489.856l340.8-148.928L489.728 0zm397.056 141.76-66.944 33.344 66.944 33.28 33.28 67.008 33.28-66.944 67.008-33.28-66.944-33.408-33.28-66.88zm-84.928 487.744 55.488 111.36 111.36 55.488-111.36 55.424-55.488 111.36-55.424-111.36-111.36-55.424 111.36-55.488z" />
  </svg>
);
export default SvgFilter3Filled;
