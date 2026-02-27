import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightUpCircle = ({
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
    <path d="M896 512a384 384 0 1 0-768 0 384 384 0 0 0 768 0M512 42.688a469.312 469.312 0 1 1 0 938.624 469.312 469.312 0 0 1 0-938.624m32.768 376.256H363.776v-85.376h326.656v326.72H605.12V479.296L376.256 708.16l-60.352-60.352z" />
  </svg>
);
export default SvgArrowRightUpCircle;
