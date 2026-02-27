import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileUnknownFilled = ({
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
    <path d="M554.688 42.688H128v938.624h462.72A277.312 277.312 0 0 1 896 521.856V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM704 693.312C704 667.968 728.32 640 768 640s64 27.968 64 53.312c0 12.928-5.632 25.536-16.512 35.584l-90.176 84.992v65.984h85.376v-29.12l62.848-59.328c26.432-24.512 43.776-59.072 43.776-98.112 0-80.704-71.232-138.624-149.312-138.624s-149.312 57.92-149.312 138.624v42.624H704zm106.816 245.184h-85.504V1024h85.504z" />
  </svg>
);
export default SvgFileUnknownFilled;
