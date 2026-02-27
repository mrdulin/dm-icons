import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity12 = ({
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
    <path d="M426.624 85.312H85.312v853.376h853.312V213.376H597.312v213.312H426.624V85.376zM341.312 512h341.312v341.376h-128V640h-85.312v213.376h-128zM256 853.376h-85.376V170.688h170.688v256H256zm512 0V426.688h-85.376v-128h170.688v554.624H768z" />
  </svg>
);
export default SvgCity12;
