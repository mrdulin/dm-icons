import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaskChecked1 = ({
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
    <path d="M512 128a384 384 0 1 0 384 384v-42.688h85.376V512A469.312 469.312 0 1 1 692.608 78.72l39.36 16.384-32.832 78.72-39.424-16.384A382.7 382.7 0 0 0 512 128m487.04 64L512 679.04 259.712 426.688 320 366.336l192 192 426.688-426.688z" />
  </svg>
);
export default SvgTaskChecked1;
