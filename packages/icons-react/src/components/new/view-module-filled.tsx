import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewModuleFilled = ({
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
    <path d="M384 554.688V896h255.808V554.688zM725.12 896h256.256V554.688H725.12zm256.256-426.688V128H725.12v341.312h256.192zM639.808 128H384v341.312h255.808zm-341.12 0h-256v341.312h256zm-256 426.688h256V896h-256z" />
  </svg>
);
export default SvgViewModuleFilled;
