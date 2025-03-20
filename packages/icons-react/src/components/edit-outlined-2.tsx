import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditOutlined2 = ({
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
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        d="m2.421 11.436 2.16 2.164-.571.573a.58.58 0 0 1-.445.19c-.064 0-.127 0-.19-.063l-1.906-.636c-.255-.064-.382-.255-.445-.446a.51.51 0 0 1 .19-.573zm7.687-10.245a.613.613 0 0 1 .89 0l.826.827-4.257 4.264a.616.616 0 0 0 0 .89l1.27 1.273a.58.58 0 0 0 .445.191.58.58 0 0 0 .445-.19l4.257-4.264.825.827a.616.616 0 0 1 0 .891l-7.623 7.636a.58.58 0 0 1-.445.191.58.58 0 0 1-.444-.19l-3.812-3.82a.616.616 0 0 1 0-.89z"
      />
    </g>
  </svg>
);
export default SvgEditOutlined2;
