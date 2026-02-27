import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnfoldMore = ({
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
    <path d="M512 152.96 743.04 384l-60.352 60.352L512 273.664 341.312 444.352 281.024 384zM341.312 579.648 512 750.336l170.688-170.688L743.04 640 512 871.04 280.96 640z" />
  </svg>
);
export default SvgUnfoldMore;
