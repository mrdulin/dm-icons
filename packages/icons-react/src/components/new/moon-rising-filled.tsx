import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoonRisingFilled = ({
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
    <path d="m446.528 139.072 19.2-71.424-71.424 19.2A426.69 426.69 0 0 0 92.608 609.28c2.112 8 6.976 20.736 10.24 29.248l4.864 12.288 12.928 31.808H371.2L512 588.8l140.8 93.888h226.88l11.84-23.616c23.168-46.4 36.48-90.24 39.168-134.336l4.48-72.96-65.792 32.064a298.688 298.688 0 0 1-419.84-190.976c-14.528-54.08-15.808-106.176-3.008-153.792m-49.6 714.304H42.688V768h328.384L512 674.048 652.928 768h328.448v85.376H627.072L512 776.576z" />
  </svg>
);
export default SvgMoonRisingFilled;
