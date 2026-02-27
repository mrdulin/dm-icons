import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPdf = ({
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
      id="mask0_4120_1410"
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
    <g mask="url(#mask0_4120_1410)">
      <path
        fill="url(#paint0_linear_4120_1410)"
        d="M14.836 2.898c.222.18.35.45.35.737V14.4a1.6 1.6 0 0 1-1.6 1.6H3.2a1.6 1.6 0 0 1-1.6-1.6V1.6A1.6 1.6 0 0 1 3.2 0h7.727c.217 0 .428.075.597.212z"
      />
      <g filter="url(#filter0_i_4120_1410)">
        <path
          fill="#D93028"
          fillOpacity={0.01}
          d="M14.836 2.898c.222.18.35.45.35.737V14.4a1.6 1.6 0 0 1-1.6 1.6H3.2a1.6 1.6 0 0 1-1.6-1.6V1.6A1.6 1.6 0 0 1 3.2 0h7.727c.217 0 .428.075.597.212z"
        />
        <path fill="url(#pattern0_4120_1410)" d="M3 15h11v1H3z" />
        <path fill="url(#pattern1_4120_1410)" d="M3 15h11v1H3z" />
      </g>
      <g filter="url(#filter1_f_4120_1410)" opacity={0.3}>
        <path
          stroke="url(#paint1_linear_4120_1410)"
          strokeWidth={0.247}
          d="M3.201 15.431h10.31"
        />
      </g>
      <g filter="url(#filter2_f_4120_1410)">
        <path
          fill="#fff"
          fillOpacity={0.78}
          d="M10.939 0a.95.95 0 0 1 .597.212l3.312 2.686c.222.18.351.45.351.737V14.4q0 .15-.028.29V3.688a.95.95 0 0 0-.396-.772L11.512.577A.95.95 0 0 0 10.959.4H3.24A1.6 1.6 0 0 0 1.64 2v12.69a1.6 1.6 0 0 1-.029-.29V1.6a1.6 1.6 0 0 1 1.6-1.6z"
        />
      </g>
      <path
        fill="#fff"
        d="M4.372 9.329v1.523h-1.05V6.51h1.701q.774 0 1.18.387.405.381.405 1.032 0 .405-.184.725a1.26 1.26 0 0 1-.535.498q-.356.178-.866.178zm.534-.842q.633 0 .633-.559 0-.57-.633-.571h-.534v1.13zm6.127.184q0 .639-.277 1.137-.27.492-.786.768-.51.276-1.204.276h-1.64V6.51h1.64q.7 0 1.21.27t.78.762q.277.491.277 1.13m-2.36 1.242q.615 0 .953-.326.345-.325.344-.916 0-.59-.344-.915-.338-.326-.953-.326h-.497v2.483zm5.79-3.404v.835h-1.781v.953h1.376v.798h-1.376v1.757h-1.05V6.51z"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_4120_1410"
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
        <feBlend in2="shape" result="effect1_innerShadow_4120_1410" />
      </filter>
      <filter
        id="filter1_f_4120_1410"
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
          result="effect1_foregroundBlur_4120_1410"
          stdDeviation={0.095}
        />
      </filter>
      <filter
        id="filter2_f_4120_1410"
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
          result="effect1_foregroundBlur_4120_1410"
          stdDeviation={0.1}
        />
      </filter>
      <linearGradient
        id="paint0_linear_4120_1410"
        x1={14.4}
        x2={1.6}
        y1={15.2}
        y2={1.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E25C54" />
        <stop offset={0.384} stopColor="#D92D23" />
        <stop offset={1} stopColor="#D43E3A" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4120_1410"
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
        id="pattern0_4120_1410"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_4120_1410" transform="scale(.04545 .5)" />
      </pattern>
      <pattern
        id="pattern1_4120_1410"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_4120_1410" transform="scale(.04545 .5)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAArSURBVHgBtccxCgAgDEPRfPT+JxaiDoUu7dbAIwm2kbSSXez4fk4H+D2TC08SDQKdl7oIAAAAAElFTkSuQmCC"
        id="image0_4120_1410"
        width={22}
        height={2}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgPdf;
