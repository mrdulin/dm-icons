import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaretUpOutlined = ({
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
    <path d="M2.302 13a1.35 1.35 0 0 1-.759-.231c-.584-.398-.718-1.169-.299-1.723l5.698-7.531a1.3 1.3 0 0 1 .3-.284c.583-.397 1.397-.27 1.816.284l5.698 7.531c.159.21.244.462.244.72 0 .681-.583 1.234-1.302 1.234z" />
  </svg>
);
export default SvgCaretUpOutlined;
