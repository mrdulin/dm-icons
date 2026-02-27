import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWatchFilled = ({
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
    <path d="M303.68 0h416.64l21.504 171.712a128 128 0 0 1 111.552 126.976V384H896v256h-42.624v85.312a128 128 0 0 1-111.552 126.976L720.384 1024h-416.64L282.24 852.288a128 128 0 0 1-111.552-126.976V298.688A128 128 0 0 1 282.24 171.712zm-4.992 768h426.688A42.69 42.69 0 0 0 768 725.312V298.688A42.69 42.69 0 0 0 725.376 256H298.688A42.69 42.69 0 0 0 256 298.688v426.624C256 748.864 275.136 768 298.688 768" />
  </svg>
);
export default SvgWatchFilled;
