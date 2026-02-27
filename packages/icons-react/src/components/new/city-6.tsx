import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity6 = ({
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
    <path d="M768 85.312H256v256H42.688v597.376h938.688V256H768zm0 256h128v512H768zm-85.312 512h-128V640h-85.312v213.376h-128V170.688h341.312v682.688zm-426.688 0H128v-426.56h128V853.44z" />
  </svg>
);
export default SvgCity6;
