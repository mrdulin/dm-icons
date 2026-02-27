import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVehicleFilled = ({
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
    <path d="M85.312 128C38.208 128 0 166.208 0 213.312V768c0 47.104 38.208 85.312 85.312 85.312h24.96l-21.248 21.376 60.288 60.352 81.664-81.728h110.336V512h-256V213.312h469.376v85.376H640v-85.376C640 166.208 601.792 128 554.688 128zM128 640h85.504v85.504H128zm796.864-298.688H483.2L384 589.12v328.192h85.312v-64h469.376v64H1024V589.12zM901.248 512H506.752l34.112-85.312h326.272zM512 640h85.504v85.504H512zm384.192 0v85.504h-85.504V640z" />
  </svg>
);
export default SvgVehicleFilled;
