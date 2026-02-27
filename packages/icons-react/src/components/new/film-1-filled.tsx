import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilm1Filled = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312zm85.312 85.376V256H256v-85.312zm597.376 0V256h85.312v-85.312zm85.312 170.624H768v128h85.312zm0 213.376H768v128h85.312zm0 213.312H768v85.312h85.312zM682.624 554.688v-85.376H341.312v85.376zM256 853.312V768h-85.376v85.312zm-85.376-170.624H256v-128h-85.376zm0-213.376H256v-128h-85.376z" />
  </svg>
);
export default SvgFilm1Filled;
