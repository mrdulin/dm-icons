import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageEdit = ({
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
    <path d="M85.312 85.312h853.312v341.376h-85.312v-256H170.624v408.96L384 366.336l252.288 252.352L576 678.976l-192-192-213.376 213.376v152.96h256v85.376H85.312zm586.56 224a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m300.352 163.648 176.128 176.128-310.912 310.912H533.376l-.064-176.128zm-39.36 160 55.424 55.424 39.36-39.296-55.424-55.424zm-4.928 115.84L744.512 736 618.624 861.888v55.424h55.488l125.824-125.888z" />
  </svg>
);
export default SvgImageEdit;
