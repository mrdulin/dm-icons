import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOutbox = ({
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
    <path d="M938.624 85.312H85.312v853.376h853.312zM853.312 704v149.312H170.624V704h156.544A213.25 213.25 0 0 0 512 810.688 213.25 213.25 0 0 0 696.768 704zm-682.688-85.312v-448h682.688v448h-211.84l-10.752 26.624a128 128 0 0 1-237.44 0l-10.816-26.624zM512 216.96 323.648 405.312 384 465.664l85.312-85.312v216.96h85.312v-216.96L640 465.664l60.352-60.352z" />
  </svg>
);
export default SvgOutbox;
