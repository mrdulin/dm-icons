import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPenBrushFilled = ({
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
    <path d="M239.872 938.624H85.312v-154.56a128 128 0 0 1 37.504-90.496l92.032-92.096 207.616 207.616-92.096 92.032a128 128 0 0 1-90.496 37.504m242.944-189.888 478.528-478.528L753.728 62.592 275.2 541.12 482.816 748.8z" />
  </svg>
);
export default SvgPenBrushFilled;
