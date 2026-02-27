import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDvFilled = ({
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
    <path d="M85.376 85.312H512v285.12c19.456 29.312 33.088 62.848 39.168 98.88h46.208V298.688h341.312v426.624H597.376V554.688h-46.208A254.7 254.7 0 0 1 512 653.568v285.12H85.376v-285.12A254.98 254.98 0 0 1 42.688 512c0-52.288 15.744-100.992 42.688-141.568zm213.312 256A170.37 170.37 0 0 0 128 512a170.304 170.304 0 0 0 170.688 170.688A170.304 170.304 0 0 0 469.376 512a170.37 170.37 0 0 0-170.688-170.688" />
  </svg>
);
export default SvgDvFilled;
