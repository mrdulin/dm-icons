import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrint = ({
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
    <path d="M170.624 85.312h682.688v213.376h149.312V768h-192v170.688H213.312V768h-192V298.688h149.312zM256 298.688h512v-128H256zM106.624 384v298.688h106.688v-85.376h597.312v85.376h106.688V384zm618.688 298.688H298.624v170.624h426.688zm0-234.88h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgPrint;
