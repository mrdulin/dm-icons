import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnlockOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.929 5.9H12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6.129v-2a2.1 2.1 0 0 0-3.48-1.583q-.835.526-1.305-.048Q4.875 1.693 5.5.93a3.9 3.9 0 0 1 6.429 2.97zM8 8.9a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgUnlockOutlined;
