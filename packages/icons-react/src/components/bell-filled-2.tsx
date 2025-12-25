import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBellFilled2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 22"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M12.596 20c-.356 1.19-1.407 2-2.596 2s-2.24-.81-2.596-2q1.219.097 2.596.096 1.378 0 2.596-.096M10 1.41a6.91 6.91 0 0 1 6.91 6.91v1.726a3.84 3.84 0 0 0 1.335 2.758 3.61 3.61 0 0 1 1.255 2.425c0 2.158-3.552 3.454-9.5 3.454S.5 17.387.5 15.229a3.61 3.61 0 0 1 1.255-2.425 3.84 3.84 0 0 0 1.336-2.758V8.319A6.91 6.91 0 0 1 10 1.41m-4.737.01C3.158 2.73 1.579 5.348 1.579 7.965L0 7.85C.15 4.65 1.808 1.93 4.21.11zM15.848 0A10.43 10.43 0 0 1 20 7.85l-1.58.114c-.15-2.65-1.622-5.355-3.683-6.805z"
    />
  </svg>
);
export default SvgBellFilled2;
