import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity1Filled = ({
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
    <path d="M341.504 341.504V256h-85.376v.192H256v85.312zm0 213.376v-85.632h-85.376v.192H256v85.312h85.504zm0 213.248v-85.44h-85.376v.128H256v85.312zM512 85.312H85.312v853.376h640v-256h213.312v-256H512zm-85.376 85.376v682.624h-256V170.688zm512 597.312h-128v170.688h128z" />
  </svg>
);
export default SvgCity1Filled;
