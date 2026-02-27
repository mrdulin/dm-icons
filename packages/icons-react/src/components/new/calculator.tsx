import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculator = ({
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
    <path d="M128 42.688h768v938.624H128zM213.312 128v170.688h597.376V128zm597.376 256H213.312v512h597.376zm-512 128h170.624v85.312H298.688zm256 0h170.624v85.312H554.688zm-256 170.688h170.624V768H298.688zm256 0h170.624V768H554.688z" />
  </svg>
);
export default SvgCalculator;
