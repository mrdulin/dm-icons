import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileZipFilled = ({
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
    <path d="M128 42.688h426.688V384H896v597.312H128zM426.88 128h-85.632v85.312H256v85.568h85.312V384H256v85.504h85.312v85.12H256v85.568h85.504v-85.376h85.312v-85.504h-85.312v-85.12h85.312v-85.504h-85.312v-85.184h85.312V128zM896 280.96v17.728H640v-256h17.664z" />
  </svg>
);
export default SvgFileZipFilled;
