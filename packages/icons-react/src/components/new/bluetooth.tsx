import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBluetooth = ({
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
    <path d="m469.312 10.88 317.952 286.144L572.352 512l214.912 214.976-317.952 286.144V615.04L298.624 785.664l-60.288-60.352L451.648 512 238.336 298.688l60.288-60.352L469.312 408.96zm85.312 604.16v206.464l108.736-97.792-108.736-108.736zm0-206.08L663.36 300.288l-108.736-97.856z" />
  </svg>
);
export default SvgBluetooth;
