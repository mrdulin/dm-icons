import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStatueOfJesus = ({
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
    <path d="M426.624 42.688h170.688v170.624H426.624zM85.312 256h853.312v113.472L640 497.472v227.84h33.28l64 256H286.72l64-256H384v-227.84l-298.688-128zM384 404.608v-63.296H236.288L384 404.672zm85.312-63.296v110.336l85.312 85.312V341.312zm170.688 0v63.36l147.648-63.36zm-85.376 316.352-85.312-85.312v152.96h85.312zm52.032 152.96H417.28L395.968 896h232z" />
  </svg>
);
export default SvgStatueOfJesus;
