import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNewConversationOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="nonzero">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        d="M14 2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8.25l-3.732 2.488L3.75 16v-3H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-.5 1.5h-11v7.999l1.25.001a1.5 1.5 0 0 1 1.493 1.356L5.25 13l-.001.197 2.169-1.445a1.5 1.5 0 0 1 .685-.245l.147-.007h5.25zM8 4.25a.75.75 0 0 1 .75.75l-.001 1.75H10.5a.75.75 0 1 1 0 1.5H8.749V10a.75.75 0 1 1-1.5 0V8.25H5.5a.75.75 0 0 1 0-1.5h1.749L7.25 5A.75.75 0 0 1 8 4.25"
      />
    </g>
  </svg>
);
export default SvgNewConversationOutlined;
