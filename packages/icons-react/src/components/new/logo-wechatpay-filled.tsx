import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoWechatpayFilled = ({
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
    <path d="M384.064 609.216a31.17 31.17 0 0 1-41.344-12.608l-87.488-192a15.616 15.616 0 0 1 23.488-19.136l100.8 71.808a46.72 46.72 0 0 0 41.728 4.736l474.176-211.008C810.432 150.784 670.464 85.312 512 85.312c-259.2 0-469.376 175.168-469.376 391.232 0 117.824 63.232 223.936 162.176 295.68a31.23 31.23 0 0 1 11.52 35.392L195.2 886.4c-.96 3.648-2.56 7.552-2.56 11.392 0 8.64 7.04 15.68 15.68 15.68 3.392 0 6.144-1.28 9.024-2.944l102.784-59.264a49.15 49.15 0 0 1 24.896-7.232c4.8 0 9.408.704 13.824 2.048 47.936 13.824 99.648 21.44 153.152 21.44 259.2 0 469.376-175.104 469.376-391.104a338.5 338.5 0 0 0-53.504-181.248L387.52 607.232l-3.52 1.984z" />
  </svg>
);
export default SvgLogoWechatpayFilled;
