import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownscale = ({
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
    <path d="M85.312 85.312h384v85.376H170.624v256H85.312V85.376zm828.352 85.376L699.2 385.088l150.4.896-.448 85.376-294.848-1.728-1.664-294.784 85.312-.512.896 150.464 214.464-214.464zM85.312 512H256v85.376h-85.376v85.312H85.312zm256 0H512v170.688h-85.376v-85.312h-85.312zm597.312 42.688v384H597.312v-85.312h256V554.688zM170.624 768v85.376H256v85.312H85.312V768zM512 768v170.688H341.312v-85.312h85.312V768z" />
  </svg>
);
export default SvgDownscale;
