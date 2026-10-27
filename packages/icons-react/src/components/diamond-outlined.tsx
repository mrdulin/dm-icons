import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiamondOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="m21.74 8.16-4.15-4.51A2 2 0 0 0 16.12 3H7.88a2 2 0 0 0-1.47.65L2.26 8.16a1 1 0 0 0-.26.68v.3a1 1 0 0 0 .23.64l9 10.86a1 1 0 0 0 1.54 0l9-10.86a1 1 0 0 0 .23-.64v-.3a1 1 0 0 0-.26-.68m-10.56 9.31-6.65-8A.253.253 0 1 1 4.72 9h3.55a1 1 0 0 1 1 .69l2.39 7.55a.266.266 0 0 1-.48.23M19.24 9h-6.17a.25.25 0 0 1-.19-.42l3.06-3.38a.25.25 0 0 1 .37 0l3.11 3.38a.25.25 0 0 1-.18.42"
      />
    </g>
  </svg>
);
export default SvgDiamondOutlined;
