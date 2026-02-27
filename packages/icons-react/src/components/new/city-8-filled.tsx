import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity8Filled = ({
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
    <path d="M597.312 85.312h-512v853.376h597.312v-256H768v256h170.624v-512H597.312zM512 426.688H384v-85.376h128zm0 426.624H170.624V682.688H512zm0-256H384V512h128zm-213.376-256v85.376h-128v-85.376zm-128 256V512h128v85.312zm128-341.312h-128v-85.312h128zM384 256v-85.312h128V256z" />
  </svg>
);
export default SvgCity8Filled;
