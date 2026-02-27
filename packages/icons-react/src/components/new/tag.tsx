import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTag = ({
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
    <path d="m464.128 982.208-422.4-422.4L473.6 128.64 896 128v423.04zm0-120.64 346.56-345.92V213.44l-301.696.512-346.496 345.92 301.696 301.696zm175.68-477.44v-85.376h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgTag;
