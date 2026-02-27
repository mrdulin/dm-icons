import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderUnlocked = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52v213.376H896v-128H448.832L363.52 192H128v618.688h426.688V896h-512zM832 576a53.31 53.31 0 0 0-53.312 53.312v32H1024v277.376H640V661.312h53.376v-32a138.688 138.688 0 0 1 236.416-98.304l30.272 30.08-60.16 60.48-30.272-30.08A53.06 53.06 0 0 0 832 576M725.312 746.688v106.624h213.312V746.688z" />
  </svg>
);
export default SvgFolderUnlocked;
