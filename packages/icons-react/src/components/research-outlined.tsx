import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgResearchOutlined = ({
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
    <path d="m20.06 3-.058.007.044.002C21.137 3.119 22 4.119 22 5.322l-3.607-.001v13.357a2.42 2.42 0 0 1-.626 1.643 2.06 2.06 0 0 1-1.518.679H5.825v-.015H3.68c-.464 0-.888-.207-1.188-.532A1.9 1.9 0 0 1 2 19.166h3.825V4.76c.028-.473.191-.903.478-1.213A1.64 1.64 0 0 1 7.52 3zM16.5 8h-5.028v.869h.764v2.52h-.764v.87h.764l-.01 1.28v.188q0 .2-.005.23a1.2 1.2 0 0 1-.16.433 1.7 1.7 0 0 1-.58.587l-.165.098v.902q.72-.174 1.222-.728.532-.588.591-1.448l.008-.219v-1.324h1.942V16h.9v-3.742h.521v-.868h-.52V8.869h.52zm-5.583.178H7.515v.869h.808q-.054.756-.132 1.122-.145.7-.565 1.181l-.126.134v1.16l.228-.133.215-.135v2.802a.77.77 0 0 0 .243.578.8.8 0 0 0 .443.225l.127.01h1.338a.82.82 0 0 0 .82-.693l.008-.115-.005-3.873a.83.83 0 0 0-.239-.615.73.73 0 0 0-.425-.207l-.13-.01H9.049q.094-.483.171-1.11l.038-.321h1.66zM9.72 11.324q.258 0 .295.231l.006.083v3.184a.36.36 0 0 1-.053.187.24.24 0 0 1-.21.113h-.661q-.218 0-.248-.203l-.006-.074v-3.164q0-.312.22-.351l.068-.006zm5.359-2.455v2.52h-1.942V8.87z" />
  </svg>
);
export default SvgResearchOutlined;
