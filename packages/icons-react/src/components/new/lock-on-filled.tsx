import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockOnFilled = ({
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
    <path d="M874.624 448H768V298.688a256 256 0 0 0-512 0V448H149.312v490.688h725.312zM341.312 298.688a170.688 170.688 0 1 1 341.312 0V448H341.312zM640 736H384v-85.312h256z" />
  </svg>
);
export default SvgLockOnFilled;
