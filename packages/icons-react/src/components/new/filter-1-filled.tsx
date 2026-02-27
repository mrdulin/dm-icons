import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilter1Filled = ({
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
    <path d="M194.176 234.688a59.5 59.5 0 0 0 8.064 6.464c13.056 9.088 34.752 19.008 65.344 28.032 60.8 17.856 147.2 29.44 244.48 29.44 97.216 0 183.68-11.584 244.352-29.44 30.656-9.024 52.352-18.944 65.408-28.032 3.84-2.688 6.4-4.864 8-6.464a59 59 0 0 0-8-6.528c-13.056-9.088-34.752-18.944-65.408-27.968-60.736-17.92-147.2-29.504-244.416-29.504-97.28 0-183.68 11.648-244.416 29.44-30.592 9.088-52.288 18.944-65.344 28.032a59.5 59.5 0 0 0-8.064 6.528m723.2 0v36.48L640 612.48v112.832a213.31 213.31 0 0 1-213.312 213.376H384V612.48L106.688 271.168v-36.48c0-35.84 24.448-60.992 46.784-76.544 23.68-16.448 55.04-29.568 90.048-39.808 70.528-20.8 165.44-33.024 268.48-33.024s197.952 12.224 268.48 33.024c35.008 10.24 66.432 23.36 90.048 39.808 22.4 15.552 46.848 40.704 46.848 76.544" />
  </svg>
);
export default SvgFilter1Filled;
