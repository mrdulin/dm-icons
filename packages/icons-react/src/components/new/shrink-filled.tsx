import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShrinkFilled = ({
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
    <path d="M960 960H64V64h896zM155.264 817.664c0 30.912 25.088 56 56 56h280v-224a112 112 0 0 0-112-112h-224zm440.32-443.392v-108.16h-76.8v239.232h239.232v-76.8h-108.16L857.92 220.416l-27.136-27.072-27.072-27.2z" />
  </svg>
);
export default SvgShrinkFilled;
