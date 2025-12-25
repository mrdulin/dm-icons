import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOfrOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 10"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.75 5.205q0 2.093-1.046 3.252-1.045 1.16-2.962 1.16-1.94 0-2.98-1.151T.723 5.193 1.77 1.936 4.754.799q1.91 0 2.953 1.154Q8.75 3.108 8.75 5.205m-6.54 0q0 1.582.64 2.4.638.817 1.892.817 1.248 0 1.884-.809t.636-2.408q0-1.576-.63-2.39-.63-.816-1.878-.815-1.26 0-1.901.814-.642.815-.642 2.391m11.485-1.142h-1.582V9.5H10.73V4.063H9.664v-.645l1.066-.422v-.422q0-1.148.54-1.702.539-.554 1.646-.554.726 0 1.43.24l-.364 1.044a3.2 3.2 0 0 0-.972-.165q-.469 0-.683.29-.214.291-.214.87v.423h1.582zm4.389-1.16q.416 0 .686.058l-.135 1.283a2.6 2.6 0 0 0-.61-.07q-.826 0-1.338.539-.513.54-.513 1.4V9.5h-1.377V3.02h1.078l.182 1.142h.07q.323-.58.84-.92.52-.34 1.117-.34" />
  </svg>
);
export default SvgOfrOutlined;
