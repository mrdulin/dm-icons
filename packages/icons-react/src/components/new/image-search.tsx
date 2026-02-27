import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageSearch = ({
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
    <path d="M85.312 85.312h853.312v384h-85.312V170.688H170.624v408.96L384 366.336l167.04 167.04-60.416 60.288L384 487.04 170.624 700.416v152.96h298.688v85.376h-384zm586.56 224a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m209.28 266.688a134.592 134.592 0 1 0 0 269.12 134.592 134.592 0 0 0 0-269.12m-219.84 134.528a219.904 219.904 0 1 1 402.624 122.368L1020.352 960l-60.416 60.288-84.288-84.48a219.904 219.904 0 0 1-342.336-182.656z" />
  </svg>
);
export default SvgImageSearch;
