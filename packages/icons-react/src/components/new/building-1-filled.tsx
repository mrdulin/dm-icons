import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBuilding1Filled = ({
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
    <path d="M320 64v69.312c16.896 4.48 32.064 11.84 45.44 21.76 23.424 17.408 38.272 40.64 47.488 63.744 10.496 26.24 14.72 54.528 15.552 79.872h62.208V384h-64v42.688h512v512H789.312v-256H490.688v256H128V384H64v-85.312h62.208c.832-25.344 4.992-53.632 15.488-79.872 9.28-23.104 24.128-46.336 47.552-63.744 13.312-9.92 28.544-17.28 45.44-21.76V64zM211.584 298.688H343.04a151.7 151.7 0 0 0-9.344-48.192 60.2 60.2 0 0 0-19.2-26.88c-7.296-5.504-18.56-10.24-37.12-10.24-18.688 0-29.952 4.736-37.248 10.24a60.2 60.2 0 0 0-19.2 26.88 151.7 151.7 0 0 0-9.344 48.192M213.312 384v469.312h128V384zM704 938.688H576V768h128z" />
  </svg>
);
export default SvgBuilding1Filled;
