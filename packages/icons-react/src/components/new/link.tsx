import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLink = ({
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
    <path d="M567.168 168.96A203.52 203.52 0 0 1 855.04 456.832l-129.28 129.28-60.352-60.288 129.28-129.28A118.272 118.272 0 0 0 627.52 229.248L498.24 358.592l-60.416-60.352zM657.6 426.688l-231.04 231.04-60.288-60.416 231.04-231.04zm-299.008 71.488-129.28 129.28A118.272 118.272 0 0 0 396.48 794.752l129.28-129.28 60.416 60.288-129.28 129.28a203.52 203.52 0 0 1-288-287.872l129.344-129.28z" />
  </svg>
);
export default SvgLink;
