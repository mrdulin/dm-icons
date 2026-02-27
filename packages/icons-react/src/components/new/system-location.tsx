import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemLocation = ({
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
    <path d="M42.688 85.312h938.688v384H896V170.688H128v512h384V768H42.688zm746.688 512C724.544 597.312 672 649.856 672 714.688c0 53.376 31.36 104.704 68.928 145.984 17.344 19.136 34.88 34.752 48.448 45.824 13.504-11.072 31.04-26.688 48.448-45.824 37.504-41.28 68.864-92.608 68.864-145.984 0-64.832-52.48-117.376-117.312-117.376m0 413.952-23.68-15.744-.128-.064-.128-.128-.512-.384-1.728-1.152a483 483 0 0 1-25.728-19.456 547.5 547.5 0 0 1-59.648-56.256c-42.496-46.72-91.136-118.016-91.136-203.392a202.688 202.688 0 0 1 405.312 0c0 85.376-48.64 156.736-91.072 203.392a548 548 0 0 1-85.44 75.712l-1.664 1.152-.512.384-.192.128h-.064zM736 682.688h106.688V768H736zM128 853.312h384v85.376H128z" />
  </svg>
);
export default SvgSystemLocation;
