import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaretLeftOutlined = ({
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
    <path d="M12.6 13.426a1.1 1.1 0 0 1-.323.754 1.073 1.073 0 0 1-1.528 0L4.725 9.257c-.967-.774-.967-1.903 0-2.567l6.024-4.87a1.073 1.073 0 0 1 1.528 0c.214.215.319.514.316.797-.002.276.01 10.524.006 10.81" />
  </svg>
);
export default SvgCaretLeftOutlined;
