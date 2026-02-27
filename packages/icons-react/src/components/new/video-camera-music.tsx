import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCameraMusic = ({
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
    <path d="M1024 180.672v660.864L725.312 670.848v182.464H0V170.688h725.312v189.184zm-298.688 278.72v113.216l213.376 121.856V331.392zM640 256H85.312v512H640zM533.312 384H448v213.312a128 128 0 1 1-85.312-120.704v-177.92h170.624zM362.688 597.312a42.688 42.688 0 1 0-85.376 0 42.688 42.688 0 0 0 85.376 0" />
  </svg>
);
export default SvgVideoCameraMusic;
