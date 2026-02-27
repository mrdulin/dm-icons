import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGamepad1Filled = ({
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
    <path d="M469.312 170.688V256h-384v597.312h853.312V256h-384v-85.312h170.688V85.312H554.624c-47.104 0-85.312 38.208-85.312 85.376m-85.312 256V512h85.312v85.312H384v85.376h-85.376v-85.376h-85.312V512h85.312v-85.312zm256 0h85.44V512h85.376v85.504H725.44v85.312H640v-85.312h-85.376V512H640zm.128 85.504v85.12h85.184v-85.12z" />
  </svg>
);
export default SvgGamepad1Filled;
