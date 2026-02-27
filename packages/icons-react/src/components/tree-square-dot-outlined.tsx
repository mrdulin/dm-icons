import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeSquareDotOutlined = ({
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
    <path d="M4.958 1.167h4.084V5.25H7.583v1.361h3.792V8.75h1.458v4.083H8.75V8.75h1.458v-.972H3.792v.972H5.25v4.083H1.167V8.75h1.458V6.611h3.792V5.25H4.958zm2.917 2.916v-1.75h-1.75v1.75zM2.333 9.917v1.75h1.75v-1.75zm7.584 0v1.75h1.75v-1.75z" />
  </svg>
);
export default SvgTreeSquareDotOutlined;
