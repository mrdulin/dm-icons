import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftRight2 = ({
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
    <path d="M917.376 746.688H551.04l128 128-60.352 60.352L387.648 704l231.04-231.04 60.352 60.352-128 128h366.336zM636.416 320l-231.04 231.04-60.352-60.352 128-128H106.688v-85.376h366.336l-128-128 60.352-60.288z" />
  </svg>
);
export default SvgArrowLeftRight2;
