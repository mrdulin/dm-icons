import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity12Filled = ({
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
    <path d="M85.312 85.312h341.312v341.376h170.688V213.312h341.312v725.376h-384V640h-85.312v298.688h-384zm85.312 768H256V426.688h85.312v-256H170.624zm512-426.624H768v426.624h85.312V298.688H682.624z" />
  </svg>
);
export default SvgCity12Filled;
