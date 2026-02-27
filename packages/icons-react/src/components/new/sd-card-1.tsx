import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSdCard1 = ({
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
    <path d="M128 85.312h533.952L896 412.992v525.696H128zm384 85.376h-42.688V320H384V170.688h-42.688V320H256V170.688h-42.688v682.624h597.376V440.32l-192.64-269.632h-20.736V320H512z" />
  </svg>
);
export default SvgSdCard1;
