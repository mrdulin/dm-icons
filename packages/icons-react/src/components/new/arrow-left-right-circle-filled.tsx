import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftRightCircleFilled = ({
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
    <path d="M981.376 512a469.312 469.312 0 1 0-938.688 0 469.312 469.312 0 0 0 938.688 0m-576-21.312v106.624h192v85.376h-192v106.624L213.376 640zM810.688 384l-192 149.312V426.688h-192v-85.376h192V234.688z" />
  </svg>
);
export default SvgArrowLeftRightCircleFilled;
