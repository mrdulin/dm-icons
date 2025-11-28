import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockOutlined2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.373 6.367c2.003 0 3.627 1.648 3.627 3.681v5.97c0 2.034-1.624 3.682-3.627 3.682H3.627C1.624 19.7 0 18.052 0 16.018v-5.97c0-2.033 1.624-3.681 3.627-3.681zm0 1.393H3.627c-1.245 0-2.254 1.024-2.254 2.288v5.97c0 1.264 1.01 2.289 2.254 2.289h12.746c1.245 0 2.254-1.025 2.254-2.289v-5.97c0-1.264-1.01-2.288-2.254-2.288M10 9.85c.379 0 .686.311.686.696v2.985a.69.69 0 0 1-.686.696.69.69 0 0 1-.686-.696v-2.985c0-.385.307-.697.686-.697M10 0a5.2 5.2 0 0 1 5.2 5.2v1.5a.7.7 0 0 1-1.4 0V5.2a3.8 3.8 0 0 0-7.6 0v1.5a.7.7 0 0 1-1.4 0V5.2A5.2 5.2 0 0 1 10 0" />
  </svg>
);
export default SvgLockOutlined2;
