import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPyramid = ({
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
    <path d="m469.312 126.336 189.44 336.704L704 380.8l306.816 557.888h-998.4l456.96-812.352zm95.04 343.04-95.04-168.96-95.04 168.96zm-238.08 85.312-168 298.688h268.416V554.688zm185.728 0V729.92l96.384-175.232zm29.44 298.688h119.872v-128h-49.408l-70.4 128zm205.248 0h119.808l-70.4-128h-49.408zM749.184 640 704 557.888 658.816 640z" />
  </svg>
);
export default SvgPyramid;
