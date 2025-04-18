import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileLockOutlined2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 168 113"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g transform="translate(0 13)">
      <path d="M32 48.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17m0-3a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
      <circle cx={35} cy={3} r={3} />
      <path d="M9 52.5h4.002c.827 0 1.498.666 1.498 1.5 0 .828-.675 1.5-1.498 1.5H9v4.002C9 60.329 8.334 61 7.5 61c-.828 0-1.5-.675-1.5-1.498V55.5H1.998A1.495 1.495 0 0 1 .5 54c0-.828.675-1.5 1.498-1.5H6v-4.002C6 47.671 6.666 47 7.5 47c.828 0 1.5.675 1.5 1.498z" />
    </g>
    <g transform="translate(135)">
      <circle cx={6} cy={3} r={3} />
      <circle cx={30} cy={59} r={3} />
      <path d="M9 77.5h4.002c.827 0 1.498.666 1.498 1.5 0 .828-.675 1.5-1.498 1.5H9v4.002C9 85.329 8.334 86 7.5 86c-.828 0-1.5-.675-1.5-1.498V80.5H1.998A1.495 1.495 0 0 1 .5 79c0-.828.675-1.5 1.498-1.5H6v-4.002C6 72.671 6.666 72 7.5 72c.828 0 1.5.675 1.5 1.498z" />
      <rect width={2} height={9} rx={1} transform="translate(24 17)" />
    </g>
    <path d="M123.361 98.752H58.798C56.7 98.752 55 97.064 55 94.98V15.772C55 13.688 56.7 12 58.798 12h45.574l22.787 22.631v60.35c0 2.083-1.7 3.771-3.798 3.771" />
    <path d="M104.372 12v18.86c0 2.083 1.7 3.771 3.798 3.771h18.989z" />
    <g transform="translate(69.558 26.459)">
      <path d="M41.055 31.23H2.62C1.136 31.23 0 30.104 0 28.629s1.136-2.602 2.62-2.602h38.435c1.485 0 2.62 1.127 2.62 2.602s-1.135 2.603-2.62 2.603M23.585 5.206H2.62C1.136 5.205 0 4.077 0 2.603 0 1.128 1.136 0 2.62 0h20.965c1.485 0 2.62 1.128 2.62 2.603 0 1.474-1.135 2.602-2.62 2.602m17.47 39.039H2.62C1.136 44.244 0 43.116 0 41.64s1.136-2.603 2.62-2.603h38.435c1.485 0 2.62 1.128 2.62 2.603s-1.135 2.603-2.62 2.603M28.127 57.256H2.795c-1.485 0-2.62-1.127-2.62-2.602s1.135-2.603 2.62-2.603h25.332c1.485 0 2.62 1.128 2.62 2.603s-1.135 2.602-2.62 2.602" />
      <ellipse cx={41.055} cy={54.654} rx={2.621} ry={2.603} />
    </g>
    <path d="M68.08 84.605v-8.23C68.08 68.987 62.058 63 54.628 63s-13.453 5.988-13.453 13.374v8.23c-2.857 0-5.174 2.304-5.174 5.145v17.49c0 1.364.545 2.672 1.516 3.637a5.2 5.2 0 0 0 3.658 1.507h26.907c2.857 0 5.174-2.303 5.174-5.144v-17.49c0-2.841-2.317-5.144-5.174-5.144m-13.453 18.004c-2.286 0-4.139-1.842-4.139-4.115s1.853-4.115 4.14-4.115 4.139 1.842 4.139 4.115-1.853 4.115-4.14 4.115m8.28-18.004H46.348v-8.23c0-4.546 3.706-8.231 8.278-8.231s8.28 3.685 8.28 8.23z" />
  </svg>
);
export default SvgFileLockOutlined2;
