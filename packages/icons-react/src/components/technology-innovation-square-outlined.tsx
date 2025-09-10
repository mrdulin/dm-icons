import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTechnologyInnovationSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7.313 4.078c-.451.121-.925.231-1.409.32v1.54h1.409v1H5.904v.43q.875.66 1.783 1.518l-.583.89a28 28 0 0 0-1.2-1.408v4.808H4.848V8.435a10.4 10.4 0 0 1-1.595 2.65L2.79 9.919c.88-.88 1.53-1.87 1.937-2.98H3.132V5.937h1.716V4.563c-.495.065-1.001.131-1.507.175l-.197-.978c1.418-.11 2.683-.33 3.805-.66zM12.053 9.072l.869-.142.165 1.011-1.034.165v3.07h-1.056v-2.894l-3.31.528L7.532 9.8l3.465-.562V3.1h1.056z"
    />
    <path
      fill="currentColor"
      d="M8.423 6.19c.77.55 1.42 1.111 1.947 1.672l-.748.738c-.462-.517-1.1-1.079-1.935-1.695zM8.753 3.66a14 14 0 0 1 1.903 1.595l-.715.726c-.462-.506-1.1-1.034-1.924-1.606z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 .8A1.2 1.2 0 0 0 .8 2v12A1.2 1.2 0 0 0 2 15.2h12a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 14 .8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTechnologyInnovationSquareOutlined;
