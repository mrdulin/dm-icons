import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCastle5 = ({
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
    <path d="M853.312 85.312V128H682.624V85.312h-85.312v304.32L512 332.672l-85.376 56.96V85.312h-85.312V128H170.624V85.312H85.312v853.376h853.312V85.376h-85.312zm-682.688 128h170.688v213.376H256v426.688h-85.376v-640zm170.688 640V512h55.616L512 435.264l115.072 76.8h55.552v341.312h-128V640h-85.312v213.376h-128zm426.688 0v-426.56h-85.376V213.376h170.688v640H768z" />
  </svg>
);
export default SvgCastle5;
