import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBuilding5 = ({
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
    <path d="m512 34.624 357.632 229.888-46.08 71.808-12.8-8.256v145.792l143.936 88-44.48 72.832-14.208-8.64v312.64H128v-312.64l-14.208 8.64-44.48-72.832 144-88V328.064l-12.8 8.256-46.208-71.808zM298.624 273.216v148.48L512 291.328l213.376 130.368V273.28l-213.44-137.216L298.688 273.28zm-85.248 300.672v279.488h256V682.688h85.312v170.688h256V573.888L512 391.36z" />
  </svg>
);
export default SvgBuilding5;
