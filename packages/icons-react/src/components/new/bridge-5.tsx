import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBridge5 = ({
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
    <path d="M0 128h1024v768H768V571.712a359.4 359.4 0 0 0-57.472-44.928A368.77 368.77 0 0 0 512 469.312a368.83 368.83 0 0 0-256 102.4V896H0zm256 334.336 11.904-7.744A454.14 454.14 0 0 1 512 384a454.14 454.14 0 0 1 256 78.336v-248.96H256zm597.312-248.96v597.376h85.376V213.376zm-682.624 0H85.312v597.312h85.376V213.312z" />
  </svg>
);
export default SvgBridge5;
