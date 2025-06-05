import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChineseLanguageCodeOutlined = ({
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
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M6.521 10.326q.133 0 .23.104l.641.7a3.5 3.5 0 0 1-1.31 1.017q-.777.353-1.866.353-.974 0-1.751-.335a3.9 3.9 0 0 1-1.328-.932A4.1 4.1 0 0 1 .293 9.81 5.4 5.4 0 0 1 0 8q0-.993.327-1.818.326-.825.92-1.422a4.2 4.2 0 0 1 1.418-.928A4.9 4.9 0 0 1 4.488 3.5q.974 0 1.703.314t1.25.83l-.545.762a.5.5 0 0 1-.124.128.35.35 0 0 1-.209.055.47.47 0 0 1-.284-.11 2.997 2.997 0 0 0-.935-.475 2.9 2.9 0 0 0-.868-.11q-.617 0-1.134.217a2.5 2.5 0 0 0-.89.618 2.85 2.85 0 0 0-.58.977Q1.664 7.282 1.664 8q0 .743.208 1.321.21.578.566.975.357.396.84.606.484.21 1.041.21.333 0 .602-.037.27-.036.496-.116.226-.078.43-.204.202-.124.402-.307a.6.6 0 0 1 .127-.088.3.3 0 0 1 .145-.034m2.952-6.729q.11 0 .181.01a.4.4 0 0 1 .13.036.4.4 0 0 1 .112.08q.055.051.121.136l4.592 5.889a6 6 0 0 1-.034-.417 9 9 0 0 1-.009-.381V3.597H16v8.806h-.84a.74.74 0 0 1-.321-.061.7.7 0 0 1-.248-.22l-4.574-5.864a9 9 0 0 1 .037.737v5.408H8.62V3.597z"
      />
    </g>
  </svg>
);
export default SvgChineseLanguageCodeOutlined;
