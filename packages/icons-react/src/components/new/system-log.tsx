import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemLog = ({
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
    <path d="M42.688 42.688h938.688v938.624H42.688zM128 405.12V896h768V405.12zm768-85.312V128H128v191.872h768zM213.376 181.312h85.504v85.568h-85.504zM256 512h512v85.312H256zm0 170.688h256V768H256z" />
  </svg>
);
export default SvgSystemLog;
