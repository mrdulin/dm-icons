import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSip = ({
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
    <path d="M886.656 347.008A146.112 146.112 0 1 0 680 140.416l-74.56 74.56-54.848-54.848-60.352 60.352 54.848 54.848L88.384 732.032v206.592h206.592L751.68 481.92l54.848 54.848 60.352-60.352-54.848-54.848zm-195.264 74.56L259.648 853.312h-85.952V767.36L605.44 335.68l85.888 85.888zm-25.6-146.24 74.56-74.624a60.8 60.8 0 0 1 85.952 85.952l-74.624 74.56z" />
  </svg>
);
export default SvgSip;
