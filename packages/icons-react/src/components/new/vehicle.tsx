import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVehicle = ({
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
    <path d="M0 213.312C0 166.208 38.208 128 85.312 128h469.376C601.792 128 640 166.208 640 213.312v85.376h-85.312v-85.376H85.312V512h256v85.312h-256V768h256v85.312H231.04l-81.728 81.728-60.288-60.352 21.312-21.376h-24.96A85.31 85.31 0 0 1 0 768zm483.136 128h441.728L1024 589.12v328.192h-85.312v-64H469.312v64H384V589.12zM469.312 768h469.376V605.568l-3.328-8.256H472.64l-3.328 8.256zm37.44-256h394.496l-34.112-85.312H540.8zM128 640h85.504v85.504H128zm384 0h85.504v85.504H512zm298.688 0h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgVehicle;
