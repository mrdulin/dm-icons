import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoadingColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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
    <g clipPath="url(#paint0_angular_8262_26634_clip_path)">
      <foreignObject
        width={2442.86}
        height={2442.86}
        x={-1221.43}
        y={-1221.43}
        transform="rotate(90 0 8)scale(.007)"
      >
        <div
          style={{
            background:
              "conic-gradient(from 90deg,rgba(229,239,255,.6) 0deg,rgba(229,239,255,0) 360deg)",
            height: "100%",
            width: "100%",
            opacity: 1,
          }}
        />
      </foreignObject>
    </g>
    <path d="M13.45 8A5.45 5.45 0 1 0 8 13.45V15A7 7 0 1 1 8 1a7 7 0 0 1 0 14v-1.55A5.45 5.45 0 0 0 13.45 8" />
    <defs>
      <clipPath id="paint0_angular_8262_26634_clip_path">
        <path d="M13.45 8A5.45 5.45 0 1 0 8 13.45V15A7 7 0 1 1 8 1a7 7 0 0 1 0 14v-1.55A5.45 5.45 0 0 0 13.45 8" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoadingColored;
