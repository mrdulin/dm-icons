import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFogSunny = ({
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
    <path d="M554.688 42.688v128h-85.312v-128zm319.36 167.552-90.496 90.56-60.352-60.352 90.496-90.496zm-663.68-60.288 90.432 90.496-60.288 60.352-90.56-90.496 60.352-60.352zM512 341.312a170.688 170.688 0 0 0-156.48 238.912l17.088 39.104-78.208 34.176-17.088-39.04a256 256 0 1 1 469.376 0l-17.088 39.04-78.208-34.176 17.088-39.04A170.688 170.688 0 0 0 512 341.312m-469.312 128h128v85.312h-128zm810.688 0h128v85.312h-128zm-768 256h256v85.312h-256zm341.312 0h512v85.312h-512zM725.376 896h213.312v85.312H725.376zm-640 0H640v85.312H85.376z" />
  </svg>
);
export default SvgFogSunny;
