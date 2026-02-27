import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTemple = ({
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
    <path d="M512 67.648 828.352 384H896v85.312h-42.688v384h85.312v85.376H85.312v-85.376h85.312v-384H128V384h67.648zM256 469.312v384h213.312v-384zm298.624 0v384H768v-384zM707.584 384 512 188.352 316.288 384h391.36z" />
  </svg>
);
export default SvgTemple;
