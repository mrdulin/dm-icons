import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderSearch = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52v277.376H896v-192H448.832L363.52 192H128v618.688h405.376V896H42.688zm736 512a117.312 117.312 0 0 1 83.008 200.192l-.32.384a117.312 117.312 0 1 1-82.688-200.576m170.304 227.2a202.688 202.688 0 1 0-60.352 60.352L960 977.664l60.416-60.224-71.36-71.552z" />
  </svg>
);
export default SvgFolderSearch;
