import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCollageFilled = ({
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
    <path d="M396.544 938.688h542.08V776.32L491.52 574.72l-94.912 363.968zm542.08-255.936V85.376H619.136L513.344 490.88l425.28 191.808zm-407.68-597.44H85.312v853.376h223.04L530.944 85.376z" />
  </svg>
);
export default SvgCollageFilled;
