import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAttic1Filled = ({
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
    <path d="m512 8.576-35.456 53.056-.192.32-.896 1.28a926 926 0 0 1-18.304 25.472c-12.8 17.152-31.168 40.832-53.76 66.944-45.696 52.864-105.984 112.576-168.768 148.736-19.84 11.456-40.768 15.616-64 15.616h-42.688v85.312h85.312l.128 320h-85.44v85.312h42.688v128h85.312v-128h213.312v128h85.376v-128h213.312v128h85.312v-128H896v-85.312h-85.312v-320H896V320h-42.688c-23.232 0-44.16-4.16-64-15.616-62.72-36.224-123.008-95.936-168.704-148.736a1176 1176 0 0 1-72.128-92.416l-.832-1.28-.256-.32zm-128 588.8a128 128 0 1 1 256 0v128h-85.312v-128a42.688 42.688 0 1 0-85.312 0v128H384z" />
  </svg>
);
export default SvgAttic1Filled;
