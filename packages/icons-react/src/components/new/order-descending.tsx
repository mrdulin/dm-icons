import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOrderDescending = ({
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
    <path d="M85.312 170.88H640v85.312H85.312zm0 298.688H640v85.312H85.312zM128 768.192H85.312v85.376h469.312v-85.376zM810.624 913.92l30.208-30.208 128-128 30.144-30.144-60.352-60.352-30.144 30.144-55.168 55.168V170.88H768v579.648l-55.168-55.168-30.208-30.144-60.288 60.352 30.08 30.144 128 128z" />
  </svg>
);
export default SvgOrderDescending;
