import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPdf = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
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
        fill="#870000"
        d="M14.957 9.043H1.043L0 7.652l1.391-1.391h13.218L16 7.652z"
      />
      <path
        fill="#E6E6E6"
        d="M13.913 16H2.087a.695.695 0 0 1-.696-.696V.696c0-.385.312-.696.696-.696h8.348l4.174 4.174v11.13a.695.695 0 0 1-.696.696"
      />
      <path fill="#B3B3B3" d="M10.435 0v3.478c0 .385.311.696.695.696h3.479z" />
      <path
        fill="#BD0100"
        d="M15.304 13.913H.696A.695.695 0 0 1 0 13.217V7.652h16v5.565a.695.695 0 0 1-.696.696"
      />
      <path
        fill="#FFF"
        d="M6.633 10.311q0 .46-.27.707-.27.25-.766.25h-.208v.906h-.738V9.442h.946q.518 0 .777.226.26.227.26.643m-1.244.355h.135a.37.37 0 0 0 .264-.093.34.34 0 0 0 .098-.258q0-.276-.306-.276h-.19zm3.998.084q0 .684-.377 1.054-.375.37-1.058.37H7.07V9.442h.945q.658 0 1.015.337.358.336.358.971m-.766.026q0-.375-.148-.557-.15-.18-.451-.18h-.215v1.529h.164q.337 0 .493-.195.157-.195.157-.597M10.603 12.174h-.726V9.442h1.614v.592h-.888v.522h.819v.592h-.819z"
      />
    </g>
  </svg>
);
export default SvgPdf;
