import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureLeftSlip = ({
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
    <path d="M230.4 221.888A469.44 469.44 0 0 1 843.776 265.6l30.208 30.144 60.288-60.352-30.144-30.144a554.88 554.88 0 0 0-711.616-61.44V64H107.2v243.2H320v-85.312zm164.032 100.928a117.568 117.568 0 1 1 235.136 0v126.08h49.408c20.8-.064 41.28 5.504 59.264 16l154.688 90.24a117.63 117.63 0 0 1 52.288 138.752l-76.032 228.288a117.63 117.63 0 0 1-111.616 80.448H455.232c-36.48 0-70.976-16.96-93.248-45.952l-183.36-238.528 40.128-60.288c18.368-27.52 51.84-40.96 84.096-33.792l91.52 20.352v-321.6zM512 290.56a32.256 32.256 0 0 0-32.256 32.256v428.032L287.808 708.16l-4.288 6.4 146.176 190.08a32.32 32.32 0 0 0 25.6 12.672h302.272c13.888 0 26.24-8.96 30.656-22.08l76.032-228.288a32.32 32.32 0 0 0-14.336-38.08l-154.688-90.24a32.26 32.26 0 0 0-16.256-4.48H544.192V322.816A32.256 32.256 0 0 0 512 290.56" />
  </svg>
);
export default SvgGestureLeftSlip;
