import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNewTextColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 22 12"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="url(#paint0_linear_8308_24848)"
      d="M10.593 4.069c1.656 0 2.296 1.056 2.07 2.663l-.09.649H8.916c-.136 1.045.236 1.562 1.247 1.562.522 0 .998-.143 1.45-.517l.425.935c-.712.561-1.42.694-2.22.694-1.822 0-2.494-.99-2.211-3.004.255-1.815 1.174-2.982 2.985-2.982M5.11 7.38 5.855 2h1.41L6.153 9.922H4.797L2.209 4.377l-.78 5.545H.02L1.132 2h1.456zm9.98.737L16.685 4.2h1.333l.48 3.939 1.52-3.939h1.434l-2.46 5.721h-1.433L17.08 6.05l-1.667 3.873h-1.41l-.807-5.721h1.521zm-4.693-2.96c-.777 0-1.227.506-1.346 1.276h2.333c.11-.78-.22-1.275-.987-1.276"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8308_24848"
        x1={11.446}
        x2={10.996}
        y1={2}
        y2={7.261}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09F778" />
        <stop offset={1} stopColor="#82FFF1" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgNewTextColored;
