import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseCircleFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m1.432-7.982 2.293-2.293c.943-.943-.471-2.357-1.414-1.414L8.018 6.604 5.725 4.31c-.943-.943-2.357.471-1.414 1.414l2.293 2.293-2.293 2.293c-.943.943.471 2.357 1.414 1.414l2.293-2.293 2.293 2.293c.943.943 2.357-.471 1.414-1.414z" />
  </svg>
);
export default SvgCloseCircleFilled;
