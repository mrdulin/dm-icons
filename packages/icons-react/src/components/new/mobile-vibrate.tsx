import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMobileVibrate = ({
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
    <path d="M213.312 42.688h597.312v938.624H213.312zM298.624 128v768h426.688V128zm-128 85.312v597.376H85.312V213.312zm768 0v597.376h-85.312V213.312zm-469.312 512h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgMobileVibrate;
