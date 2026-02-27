import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArticle = ({
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
    <path d="M106.688 85.312h810.688v853.376H106.688zM192 170.688v682.624h640V170.688zm106.688 128h426.688V384H298.688zm0 170.624h426.688v85.376H298.688zm0 170.688h298.688v85.312H298.688z" />
  </svg>
);
export default SvgArticle;
