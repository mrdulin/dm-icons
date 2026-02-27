import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureRanslation = ({
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
    <path d="M420.931 93.282a109.628 109.628 0 0 1 217.208 2.944 109.628 109.628 0 0 1 134.716 106.748v35.39A109.5 109.5 0 0 1 906.61 345.241v294.773a341.3 341.3 0 0 1-341.3 341.3h-57.598A341.3 341.3 0 0 1 177.548 726.73L123.47 520.658a97.916 97.916 0 0 1 162.362-95.676V202.91c0-60.542 49.086-109.628 109.628-109.628zm-1.216 109.628a24.32 24.32 0 1 0-48.574 0v373.298c0 45.695-61.118 58.622-80.637 19.712L229.066 489.49a12.608 12.608 0 0 0-23.039 9.536L260.105 705.1a255.99 255.99 0 0 0 247.607 190.905h57.598A255.99 255.99 0 0 0 821.3 640.014V345.177a24.191 24.191 0 0 0-48.381 0v166.842h-85.373v-309.11a24.32 24.32 0 1 0-48.575 0v309.11h-85.309V109.665a24.32 24.32 0 0 0-48.638 0V512.02H419.78v-309.11z" />
  </svg>
);
export default SvgGestureRanslation;
