import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgXlsx = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="mask0_4120_1400"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M16 0H0v16h16z" />
    </mask>
    <g mask="url(#mask0_4120_1400)">
      <path
        fill="url(#paint0_linear_4120_1400)"
        d="M14.836 2.898c.222.18.35.45.35.737V14.4a1.6 1.6 0 0 1-1.6 1.6H3.2a1.6 1.6 0 0 1-1.6-1.6V1.6A1.6 1.6 0 0 1 3.2 0h7.727c.217 0 .428.075.597.212z"
      />
      <g filter="url(#filter0_i_4120_1400)">
        <path
          fill="#21AF20"
          fillOpacity={0.01}
          d="M14.836 2.898c.222.18.35.45.35.737V14.4a1.6 1.6 0 0 1-1.6 1.6H3.2a1.6 1.6 0 0 1-1.6-1.6V1.6A1.6 1.6 0 0 1 3.2 0h7.727c.217 0 .428.075.597.212z"
        />
        <path fill="url(#pattern0_4120_1400)" d="M3 15h11v1H3z" />
        <path fill="url(#pattern1_4120_1400)" d="M3 15h11v1H3z" />
      </g>
      <g filter="url(#filter1_f_4120_1400)" opacity={0.3}>
        <path
          stroke="url(#paint1_linear_4120_1400)"
          strokeWidth={0.247}
          d="M3.201 15.431h10.31"
        />
      </g>
      <g filter="url(#filter2_f_4120_1400)">
        <path
          fill="#fff"
          fillOpacity={0.78}
          d="M10.939 0a.95.95 0 0 1 .597.212l3.312 2.686c.222.18.351.45.351.737V14.4q0 .15-.028.29V3.688a.95.95 0 0 0-.396-.772L11.512.577A.95.95 0 0 0 10.959.4H3.24A1.6 1.6 0 0 0 1.64 2v12.69a1.6 1.6 0 0 1-.029-.29V1.6a1.6 1.6 0 0 1 1.6-1.6z"
        />
      </g>
      <path
        fill="#fff"
        d="M10.122 12 8.377 9.51 6.877 12H4.583l2.647-4.119L4.5 4h2.378l1.698 2.41L10.04 4h2.284L9.712 8.028 12.5 12z"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_4120_1400"
        width={13.587}
        height={16}
        x={1.6}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.617} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.33 0" />
        <feBlend in2="shape" result="effect1_innerShadow_4120_1400" />
      </filter>
      <filter
        id="filter1_f_4120_1400"
        width={10.689}
        height={0.626}
        x={3.011}
        y={15.118}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4120_1400"
          stdDeviation={0.095}
        />
      </filter>
      <filter
        id="filter2_f_4120_1400"
        width={13.988}
        height={15.09}
        x={1.411}
        y={-0.2}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4120_1400"
          stdDeviation={0.1}
        />
      </filter>
      <linearGradient
        id="paint0_linear_4120_1400"
        x1={14.4}
        x2={1.6}
        y1={15.2}
        y2={1.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AB06E" />
        <stop offset={0.384} stopColor="#299642" />
        <stop offset={1} stopColor="#329B4B" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4120_1400"
        x1="nan"
        x2="nan"
        y1="nan"
        y2="nan"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={0.567} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.05} />
      </linearGradient>
      <pattern
        id="pattern0_4120_1400"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_4120_1400" transform="scale(.04545 .5)" />
      </pattern>
      <pattern
        id="pattern1_4120_1400"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_4120_1400" transform="scale(.04545 .5)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAArSURBVHgBtccxCgAgDEPRfPT+JxaiDoUu7dbAIwm2kbSSXez4fk4H+D2TC08SDQKdl7oIAAAAAElFTkSuQmCC"
        id="image0_4120_1400"
        width={22}
        height={2}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgXlsx;
