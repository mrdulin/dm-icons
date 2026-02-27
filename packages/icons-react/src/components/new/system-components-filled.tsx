import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemComponentsFilled = ({
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
    <path d="M554.624 333.376a117.376 117.376 0 1 0-85.312 0v58.176l-164.224 96v190.144l-54.656 27.52a117.312 117.312 0 1 0 46.08 72.32l49.728-24.96L512 849.344l165.76-96.896 49.728 24.96a117.312 117.312 0 1 0 46.08-72.32l-54.656-27.52v-190.08l-164.288-96v-58.24z" />
  </svg>
);
export default SvgSystemComponentsFilled;
