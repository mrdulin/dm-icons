import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionCircleFilled = ({
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
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m.117 4c-.86 0-1.558.216-2.083.655-.535.44-.804 1.06-.804 1.84v.25h1.753v-.25c0-.35.074-.602.215-.766.157-.199.429-.301.842-.301.326 0 .561.071.716.205.147.135.221.314.221.549 0 .172-.072.336-.228.5l-.128.128c-.72.549-1.165.965-1.327 1.259-.167.28-.25.634-.25 1.048h1.763q0-.264.131-.49a1.2 1.2 0 0 1 .366-.393c.53-.398.849-.65.976-.774.327-.372.483-.819.483-1.344 0-.659-.256-1.188-.76-1.564C9.527 4.182 8.895 4 8.117 4m-.143 6q-.413 0-.71.271a.92.92 0 0 0-.284.697.92.92 0 0 0 .284.697q.31.283.71.283.425 0 .71-.27a.92.92 0 0 0 .296-.71.95.95 0 0 0-.284-.697q-.284-.27-.722-.271" />
  </svg>
);
export default SvgQuestionCircleFilled;
