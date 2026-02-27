import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemMarked = ({
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
    <path d="M42.688 85.312h938.688v384H896V170.688H128v512h405.376V768H42.688zm576 469.184h362.688v439.232L800.128 882.112l-181.44 111.552zM704 639.808v201.216l96.192-59.136L896 840.96V639.872H704zM128 853.312h405.376v85.376H128z" />
  </svg>
);
export default SvgSystemMarked;
