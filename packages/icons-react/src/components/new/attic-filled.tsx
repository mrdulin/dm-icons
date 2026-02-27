import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAtticFilled = ({
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
    <path d="m512 12.544 34.56 47.808.064.128.384.448 1.408 1.92 5.696 7.744a2325 2325 0 0 0 94.464 118.4c29.248 34.176 61.824 69.952 94.08 100.8 32.768 31.36 63.168 55.744 88.192 69.184 16.384 8.832 30.848 15.36 42.752 19.584 12.544 4.48 19.712 5.44 22.4 5.44h42.624v85.312h-43.136a145.2 145.2 0 0 1-42.176-7.552v7.616H170.624v-7.616a145.2 145.2 0 0 1-42.24 7.616H85.312V384H128c2.624 0 9.792-.96 22.336-5.44 11.904-4.224 26.368-10.752 42.752-19.584 25.024-13.44 55.488-37.824 88.192-69.12a1421 1421 0 0 0 94.08-100.928 2325 2325 0 0 0 100.16-126.08l1.472-1.92.32-.448.128-.128zM170.624 554.688v298.688H85.312v85.312H384v-128a128 128 0 1 1 256 0v128h298.624v-85.312h-85.312V554.688zM512 768a42.69 42.69 0 0 0-42.688 42.688v128h85.312v-128A42.69 42.69 0 0 0 512 768" />
  </svg>
);
export default SvgAtticFilled;
