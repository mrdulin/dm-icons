import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeartBeatOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.588 4.657c.334-.914 1.644-.862 1.904.076l3.196 11.555 1.727-3.305a1 1 0 0 1 .763-.53l.123-.007H23a1 1 0 0 1 0 2l-5.093-.001-2.619 5.018c-.4.768-1.502.688-1.811-.082l-.04-.114-3.041-10.989-1.949 5.346a1 1 0 0 1-.815.65l-.124.007H1a1 1 0 1 1 0-2h5.808z" />
  </svg>
);
export default SvgHeartBeatOutlined;
