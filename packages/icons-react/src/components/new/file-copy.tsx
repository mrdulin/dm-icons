import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileCopy = ({
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
    <path d="M256 42.688h401.664L896 280.96v529.664H256v-768zM341.312 128v597.312h469.312V384h-256V128zM640 145.664v152.96h152.96L640 145.728zm-469.376 67.648V896H640v85.312H85.312v-768z" />
  </svg>
);
export default SvgFileCopy;
