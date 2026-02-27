import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocationSettingFilled = ({
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
    <path d="M388.864 930.56c25.92 21.376 52.864 40.896 80.448 59.904 23.232-16 46.016-32.384 68.096-49.92A288 288 0 0 1 847.936 491.2a384 384 0 1 0-762.624-64.64c0 155.264 94.656 293.504 181.824 388.864a1202 1202 0 0 0 121.728 115.2zm80.448-365.248a138.688 138.688 0 1 1 0-277.312 138.688 138.688 0 0 1 0 277.312m341.312 37.376c30.528 7.872 57.728 23.936 79.104 45.76l50.88-29.44 42.688 73.92-50.88 29.376a170.9 170.9 0 0 1 0 91.392l50.88 29.312-42.688 73.92-50.88-29.376c-21.376 21.76-48.64 37.888-79.104 45.696V992h-85.312v-58.752a170.5 170.5 0 0 1-79.104-45.696l-50.88 29.44-42.688-73.92 50.88-29.44a170.8 170.8 0 0 1 0-91.328l-50.88-29.376 42.688-73.92 50.88 29.44c21.376-21.824 48.64-37.888 79.104-45.76V544h85.312zm-115.84 121.344-1.536 2.688a84.93 84.93 0 0 0 0 82.56l1.536 2.688a85.248 85.248 0 0 0 146.368 0l1.536-2.752a84.99 84.99 0 0 0 0-82.496l-1.536-2.688a85.312 85.312 0 0 0-146.368 0" />
  </svg>
);
export default SvgLocationSettingFilled;
