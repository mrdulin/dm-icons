import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOperaFilled = ({
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
    <path d="M277.312 213.312h64c156.16 0 258.816 62.528 323.328 149.76 43.072 58.24 67.968 125.76 82.56 189.056 71.68-54.4 156.544-76.8 243.584-93.504l-58.688 352.512H94.72l-64-256.448h54.656c43.52 0 80.96 4.48 110.72 10.112L156.8 427.2h56.576c55.296 0 108.992 9.856 149.504 19.904a1630 1630 0 0 0-60.864-174.72l-24.64-59.072zm110.592 329.6a686.3 686.3 0 0 0-116.928-26.496l59.84 209.344h56.192l34.816.064-.256-2.24c-4.288-40.512-6.272-59.264-9.6-78.08-3.328-18.944-7.872-37.184-17.664-76.8zM242.048 725.76l-19.072-66.752a363 363 0 0 0-21.312-5.76 469 469 0 0 0-61.056-10.368l20.672 82.88zm525.184 0h92.608l25.408-152.96c-3.904 1.6-8 3.2-12.16 4.992-38.144 16.256-79.872 40.64-109.952 75.264 2.176 24.256 3.392 49.728 4.032 70.272v2.432z" />
  </svg>
);
export default SvgOperaFilled;
