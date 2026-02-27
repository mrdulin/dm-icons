import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWalletFilled = ({
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
    <path d="M682.688 128h-640v768h938.688V298.688H810.688V256a128 128 0 0 0-128-128m42.688 170.688H128v-85.376h554.688c23.552 0 42.688 19.136 42.688 42.688zM810.688 640h-128v-85.312h128z" />
  </svg>
);
export default SvgWalletFilled;
