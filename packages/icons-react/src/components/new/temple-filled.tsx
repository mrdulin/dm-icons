import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTempleFilled = ({
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
    <path d="M512 67.648 828.352 384H896v85.376h-42.688v384h85.312v85.312H85.312v-85.312h85.312v-384H128V384h67.648zM256 469.376v384h213.312v-384zm298.624 0v384H768v-384z" />
  </svg>
);
export default SvgTempleFilled;
