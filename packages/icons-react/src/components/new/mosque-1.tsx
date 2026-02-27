import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMosque1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m256 67.648 170.624 170.688v89.344a256.06 256.06 0 0 1 170.688-110.72v-67.648h85.312v67.648a256.19 256.19 0 0 1 209.792 209.792h46.208v512H85.312V238.336zm549.248 359.04a170.752 170.752 0 0 0-330.56 0zM426.624 512v341.312H512v-256h256v256h85.312V512zm256 341.312V682.688h-85.312v170.624zm-341.312 0V273.664L256 188.352l-85.376 85.312v579.648zm-42.496-512v85.568h-85.504v-85.376h.192v-.192z" />
  </svg>
);
export default SvgMosque1;
