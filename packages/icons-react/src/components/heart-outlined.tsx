import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeartOutlined = ({
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
    <path d="M14.74 2.321a4.446 4.446 0 0 0-6.313 0l-.428.432-.415-.432a4.443 4.443 0 0 0-6.323 0c-1.74 1.757-1.65 4.725.09 6.482l.325.327 5.435 5.5a1.25 1.25 0 0 0 1.776 0l5.438-5.49.325-.328c1.737-1.753 1.83-4.72.09-6.49m-.324 3.38a3.03 3.03 0 0 1-.898 1.92l-.34.36-5.186 5.235-5.185-5.235-.33-.346a3.03 3.03 0 0 1-.902-1.92 2.9 2.9 0 0 1 .827-2.227 2.84 2.84 0 0 1 2.204-.84c.723.061 1.4.387 1.902.917l.347.346.6.606.855.863c.214.216.526.3.818.22a.86.86 0 0 0 .378-1.43l-.308-.327.363-.35a2.83 2.83 0 0 1 3.192-.586 2.88 2.88 0 0 1 1.67 2.807z" />
  </svg>
);
export default SvgHeartOutlined;
