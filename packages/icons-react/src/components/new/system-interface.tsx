import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemInterface = ({
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
    <path d="M42.688 42.688h938.688v938.624H42.688zM128 362.496V896h768V362.496zm768-85.376V128H128v149.12zM256 469.312h85.504v85.568H256zm170.688 0h85.504v85.568h-85.504zm170.688 0h85.504v85.568h-85.504z" />
  </svg>
);
export default SvgSystemInterface;
