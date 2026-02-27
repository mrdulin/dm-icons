import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExpandVertical = ({
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
    <path d="M853.376 149.312H170.688V64h682.688zM512 174.272 721.728 384l-60.352 60.352-106.688-106.688v348.672l106.688-106.688L721.728 640 512 849.664 302.336 640l60.352-60.352 106.688 106.688V337.664L362.688 444.352 302.336 384 512 174.336zM853.376 960H170.688v-85.312h682.688z" />
  </svg>
);
export default SvgExpandVertical;
