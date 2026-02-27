import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity10 = ({
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
    <path d="M597.312 30.72v395.968h341.312v512H85.312V158.656l512-128zm0 822.592h85.312V640H768v213.312h85.312V512h-256zM170.624 225.344v627.968H512V139.968zM256 341.248h85.504v85.504H256z" />
  </svg>
);
export default SvgCity10;
