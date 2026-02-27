import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTornado = ({
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
    <path d="M235.84 170.688A21.95 21.95 0 0 0 213.312 192c0 11.072 9.344 21.312 22.528 21.312h574.848v85.376H235.84C177.024 298.688 128 251.648 128 192S177.024 85.312 235.84 85.312h105.472v85.376zM896 341.376v85.312H256v-85.312zm-554.688 128h469.376v85.312H341.312zm-85.312 128h384v85.312H256zm-42.688 128h341.376v85.312H213.312zm128 128H640v85.312H341.312z" />
  </svg>
);
export default SvgTornado;
