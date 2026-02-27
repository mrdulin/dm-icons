import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLightbulbFilled1 = ({
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
    <path d="M672 1012.8H352v-83.2h320zM512 11.2a352 352 0 0 1 352 352v20.928c0 49.344-11.52 98.048-33.536 142.208L672 843.136H352l-158.464-316.8A317.95 317.95 0 0 1 160 384.128V363.2a352 352 0 0 1 352-352M399.36 357.568l91.008 91.072-69.248 137.152L626.176 448.64l-91.072-91.072 67.84-135.68-203.52 135.68z" />
  </svg>
);
export default SvgLightbulbFilled1;
