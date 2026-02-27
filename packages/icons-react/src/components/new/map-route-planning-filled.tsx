import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapRoutePlanningFilled = ({
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
    <path d="m512 606.464-24.192-16.64-.128-.064-.128-.128-.576-.384-1.728-1.216a560 560 0 0 1-27.072-20.928 622 622 0 0 1-63.04-59.648c-44.544-48.704-96.512-122.88-96.512-208.768a213.312 213.312 0 1 1 426.688 0c0 85.824-51.968 160-96.512 208.768a622 622 0 0 1-90.112 80.64l-1.728 1.152-.512.384-.192.128-24.32 16.64zm64-307.84a64 64 0 1 0-128 0 64 64 0 0 0 128 0M213.312 426.688h-128v512h853.312v-512H768V512h85.312v14.528l-4.48-5.888-28.928 22.016 33.408 44.16v266.56H170.624v-248.64l52.672-32.192L186.304 512h27.008zM184.192 512l-13.568 8.32V512zM758.4 694.592l37.44-20.416-40.704-74.944-37.504 20.352a426 426 0 0 1-48.64 22.592l31.104 79.488a511 511 0 0 0 58.24-27.072zm-502.848-7.744c18.56 10.88 37.76 20.48 57.408 28.864l39.296 16.768 33.472-78.528-39.296-16.704a427 427 0 0 1-47.872-24.064zm283.712 69.312 42.624-2.176-4.224-85.184-42.624 2.112c-17.856.896-35.776.64-53.568-.64l-6.464 85.056c21.376 1.6 42.88 1.92 64.256.832" />
  </svg>
);
export default SvgMapRoutePlanningFilled;
