import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserSettingFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376M832 544v58.688c30.464 7.872 57.664 23.936 79.104 45.76l50.88-29.44 42.624 73.92-50.816 29.376a171.07 171.07 0 0 1 0 91.392l50.816 29.376-42.624 73.856-50.88-29.376c-21.44 21.76-48.64 37.888-79.168 45.76V992h-85.312v-58.688a170.5 170.5 0 0 1-79.104-45.76l-50.88 29.44-42.688-73.92 50.88-29.44a170.8 170.8 0 0 1 0-91.328l-50.88-29.376 42.688-73.856 50.88 29.376c21.44-21.76 48.64-37.888 79.104-45.76V544zM714.56 726.72a84.99 84.99 0 0 0 0 82.56l1.6 2.688a85.312 85.312 0 0 0 146.304 0l1.536-2.752a84.93 84.93 0 0 0 0-82.496l-1.536-2.688a85.312 85.312 0 0 0-146.304 0zM557.312 597.312a286.72 286.72 0 0 0-56 170.688c0 63.872 20.8 122.88 56 170.688h-472v-85.376a256 256 0 0 1 256-256z" />
  </svg>
);
export default SvgUserSettingFilled;
