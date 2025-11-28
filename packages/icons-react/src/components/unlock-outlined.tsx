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
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.373 7.667c2.003 0 3.627 1.648 3.627 3.681v5.97C21 19.352 19.376 21 17.373 21H4.627C2.624 21 1 19.352 1 17.318v-5.97c0-2.033 1.624-3.681 3.627-3.681zm0 1.393H4.627c-1.245 0-2.254 1.024-2.254 2.288v5.97c0 1.264 1.01 2.289 2.254 2.289h12.746c1.245 0 2.254-1.025 2.254-2.289v-5.97c0-1.264-1.01-2.288-2.254-2.288M11 11.15c.379 0 .686.311.686.696v2.985a.69.69 0 0 1-.686.696.69.69 0 0 1-.686-.696v-2.985c0-.385.307-.697.686-.697M11.294 1c.98 0 1.92.282 2.73.804.32.206.415.636.211.96a.68.68 0 0 1-.947.216 3.67 3.67 0 0 0-1.994-.587c-2.057 0-3.725 1.693-3.725 3.781v2.068a.69.69 0 0 1-.687.696.69.69 0 0 1-.686-.696V6.174C6.196 3.317 8.48 1 11.294 1" />
  </svg>
);
export default SvgUnlockOutlined;
