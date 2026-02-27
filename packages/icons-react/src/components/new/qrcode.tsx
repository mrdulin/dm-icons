import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQrcode = ({
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
    <path d="M85.312 85.312h384v384h-384zm85.312 85.376V384H384V170.688zm384-85.376h384v384h-384zM640 170.688V384h213.312V170.688zm-405.376 64h85.504v85.504h-85.504zm469.376 0h85.504v85.504H704zM554.496 554.496H640V640h-85.504zm298.624 0h85.504V640H853.12zm-767.808.192h384v384h-384zM170.624 640v213.312H384V640zm511.872 42.496H768v85.312h85.312v85.376h85.312v85.504H853.12v-85.376h-85.312V768h-85.312zM234.624 704h85.504v85.504h-85.504zm319.872 149.12H640v85.568h-85.504z" />
  </svg>
);
export default SvgQrcode;
