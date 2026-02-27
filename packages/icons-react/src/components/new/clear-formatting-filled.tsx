import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClearFormattingFilled = ({
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
    <path d="m598.656 80.576 412.032 412.032L654.656 848.64l-11.52 11.584h210.24v85.312h-565.44l-277.12-277.12L598.656 80.64zM247.04 552.896l-115.456 115.52 191.744 191.808h199.68l15.616-15.744-291.648-291.52z" />
  </svg>
);
export default SvgClearFormattingFilled;
