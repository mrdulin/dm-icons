import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCursor = ({
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
    <path d="m132.608 132.864 719.552 252.8-184.32 131.584 243.52 243.456-150.848 150.848-243.456-243.456-131.648 184.256zm139.456 139.392 139.392 396.8 94.72-132.48 254.336 254.272 30.144-30.144L536.32 506.368l132.48-94.72z" />
  </svg>
);
export default SvgCursor;
