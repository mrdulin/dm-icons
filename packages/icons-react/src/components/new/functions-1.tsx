import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFunctions1 = ({
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
    <path d="M85.312 213.312c0-47.104 38.208-85.312 85.312-85.312H512v85.312H170.624v256H512v85.376H170.624V896H85.312zm853.312 213.376v91.072a85.39 85.39 0 0 1-30.976 65.792l-94.08 77.696 94.08 77.76c19.648 16.192 30.976 40.32 30.976 65.792V896h-85.312v-91.136l-106.688-88.192L640 804.864V896h-85.376v-91.136a85.4 85.4 0 0 1 30.976-65.792l94.08-77.76-94.08-77.632a85.31 85.31 0 0 1-30.976-65.792v-91.2H640v91.072l106.624 88.128 106.688-88.128v-91.072z" />
  </svg>
);
export default SvgFunctions1;
