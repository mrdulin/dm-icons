import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaretRightOutlined = ({
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
    <path
      fill="currentColor"
      d="M4 2.574c.005-.274.116-.546.323-.754a1.073 1.073 0 0 1 1.528 0l6.024 4.923c.967.774.967 1.903 0 2.567L5.85 14.18a1.073 1.073 0 0 1-1.528 0 1.13 1.13 0 0 1-.316-.797c.002-.276-.01-10.524-.006-10.81"
    />
  </svg>
);
export default SvgCaretRightOutlined;
