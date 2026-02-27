import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWallet = ({
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
    <path d="M42.688 128h640a128 128 0 0 1 128 128v42.688h170.688V896H42.688zM128 384v426.688h768V384zm0-85.312h597.376V256a42.69 42.69 0 0 0-42.688-42.688H128zm554.688 256h128V640h-128z" />
  </svg>
);
export default SvgWallet;
