import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapChatFilled = ({
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
    <path d="M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88 85.312 50.368V490.688h128V217.216L405.312 91.2zm533.312-700.16v384H704V203.392zM981.312 576H576v384.768l179.52-86.208h225.792z" />
  </svg>
);
export default SvgMapChatFilled;
