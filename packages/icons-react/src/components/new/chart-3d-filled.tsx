import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChart3DFilled = ({
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
    <path d="M881.728 249.472 512 36.032l-369.536 213.44L512 462.72l369.728-213.312zm-327.04-81.792v170.688H469.44V167.68h85.376zM924.16 323.52 554.688 536.64v426.688l369.536-213.376V323.52zM683.776 561.856l147.84 85.376-42.688 73.856-147.84-85.312zM469.312 963.264V536.64L99.904 323.392v426.56zM383.04 635.776 235.2 721.088l-42.624-73.856 147.776-85.376z" />
  </svg>
);
export default SvgChart3DFilled;
