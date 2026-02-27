import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLightbulbCircleFilled = ({
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
    <path d="M981.376 512a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0M512 192c-116.416 0-211.2 94.72-211.2 211.2 0 32 7.04 62.592 20.8 91.136 24.064 49.856 50.56 106.368 71.808 167.04h237.248c21.312-60.672 47.744-117.184 71.808-167.04 13.824-28.544 20.736-59.2 20.736-91.136C723.2 286.72 628.48 192 512 192M405.376 725.312v85.376h213.312v-85.376z" />
  </svg>
);
export default SvgLightbulbCircleFilled;
