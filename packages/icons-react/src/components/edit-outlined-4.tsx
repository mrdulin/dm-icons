import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditOutlined4 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.874 2.474a1 1 0 0 1 1.414 0l1.237 1.237a1 1 0 0 1 0 1.414L5.58 11.072l-3.19.538.538-3.19zm-.115 1.528L9.997 5.24l.821-.822-1.237-1.237zm.53 1.945L8.053 4.709 3.86 8.901 3.61 10.39l1.489-.251z" />
  </svg>
);
export default SvgEditOutlined4;
