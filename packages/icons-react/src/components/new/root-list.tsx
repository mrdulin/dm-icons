import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRootList = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312zm85.312 85.376v682.624h682.688v-682.56H170.624zM256 320h512v85.312H256zm0 170.688h341.312V576H256z" />
  </svg>
);
export default SvgRootList;
