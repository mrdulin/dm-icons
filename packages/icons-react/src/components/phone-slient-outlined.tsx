import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhoneSlientOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.583 1.167h5.005l.868 3.902L5.37 6.154a8.2 8.2 0 0 0 2.475 2.475l1.085-1.085 3.903.868v5.004h-.584c-2.332 0-4.506-.684-6.33-1.864a11.7 11.7 0 0 1-3.472-3.473A11.6 11.6 0 0 1 .583 1.75zm1.183 1.166c.103 1.879.7 3.625 1.662 5.112a10.6 10.6 0 0 0 3.127 3.127 10.44 10.44 0 0 0 5.112 1.662V9.347l-2.364-.525-1.269 1.269-.386-.22a9.4 9.4 0 0 1-3.52-3.519l-.219-.386 1.269-1.269-.525-2.364z" />
  </svg>
);
export default SvgPhoneSlientOutlined;
