import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiFaceCryColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 51 50"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={25.578} cy={25} r={19} fill="url(#a)" />
    <circle cx={25.578} cy={25} r={19} fill="url(#b)" />
    <circle cx={25.578} cy={25} r={17} fill="url(#c)" />
    <mask
      id="d"
      width={39}
      height={38}
      x={6}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <circle cx={25.578} cy={25} r={19} fill="#D9D9D9" />
    </mask>
    <g mask="url(#d)">
      <path fill="url(#e)" d="M12.578 19h7v25h-7z" />
      <path fill="url(#f)" d="M30.578 19h7v25h-7z" />
      <path
        fill="#6C4325"
        d="M25.078 22.15c2.142 0 4.15 1.518 4.15 3.7a1 1 0 0 1-2 0c0-.8-.812-1.7-2.15-1.7s-2.15.9-2.15 1.7a1 1 0 0 1-2 0c0-2.182 2.008-3.7 4.15-3.7M19.578 17a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM38.578 17a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z"
      />
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={25.578}
        x2={25.578}
        y1={8}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEE2AD" />
        <stop offset={1} stopColor="#FEE2AD" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={16.078}
        x2={16.078}
        y1={19}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#87C1FE" />
        <stop offset={1} stopColor="#479CFE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={34.078}
        x2={34.078}
        y1={19}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#87C1FE" />
        <stop offset={1} stopColor="#479CFE" />
      </linearGradient>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(78.559 2.853 16.898)scale(33.9241)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA9F" />
        <stop offset={0.123} stopColor="#FFE380" />
        <stop offset={0.416} stopColor="#FFD250" />
        <stop offset={0.644} stopColor="#FFC122" />
        <stop offset={1} stopColor="#FFB422" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(78.559 2.853 16.898)scale(33.9241)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.557} stopColor="#E35D12" stopOpacity={0} />
        <stop offset={1} stopColor="#FF24F6" stopOpacity={0.3} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgEmojiFaceCryColored;
