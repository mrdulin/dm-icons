import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity1 = ({
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
    <path d="M85.312 85.312H512v341.376h426.624v512H85.312zM512 512v341.376h170.624V640h170.688V512zm341.312 213.376H768v128h85.312zm-426.688 128V170.688h-256v682.688zM341.504 256v85.504H256v-85.312h.128V256zm0 213.312v85.568H256v-85.376h.128v-.192zm0 213.376v85.504H256v-85.376h.128v-.128z" />
  </svg>
);
export default SvgCity1;
