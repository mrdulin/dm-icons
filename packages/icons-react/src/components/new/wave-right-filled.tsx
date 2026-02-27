import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWaveRightFilled = ({
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
    <path d="m769.984 58.432 35.2 24.256a514.6 514.6 0 0 1 131.584 131.584l24.192 35.136-70.272 48.384-24.192-35.072a429.3 429.3 0 0 0-109.76-109.824l-35.2-24.192zM586.752 190.4a58.56 58.56 0 0 0-82.944.128L279.68 415.872l18.944-46.72c23.872-58.88-42.88-113.088-95.616-77.632-8 5.44-14.72 12.608-19.584 20.928L81.856 486.4a306.75 306.75 0 0 0 48 371.584l36.032 36.032a306.75 306.75 0 0 0 433.792 0l214.784-214.848a58.688 58.688 0 0 0-82.944-82.944l-68.48 68.416-22.592-22.656 157.44-157.44a58.688 58.688 0 0 0-82.944-83.008l-157.44 157.44-22.656-22.592L750.592 320.64a58.688 58.688 0 1 0-82.944-83.008l-215.744 215.68-22.656-22.592 157.504-157.504a58.56 58.56 0 0 0 0-82.816" />
  </svg>
);
export default SvgWaveRightFilled;
