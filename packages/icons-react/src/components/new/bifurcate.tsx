import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBifurcate = ({
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
    <path d="M256 170.688A42.688 42.688 0 1 0 256 256a42.688 42.688 0 0 0 0-85.312m-128 42.688a128 128 0 1 1 174.336 119.296c5.44 28.48 17.536 64.256 39.872 96.256C373.44 473.728 424.896 512 512 512s138.56-38.272 169.792-83.072c22.272-32 34.432-67.84 39.872-96.256a128 128 0 1 1 86.144 2.368 341.9 341.9 0 0 1-56 142.72C712 534.912 648.512 583.488 554.688 594.88v95.104a128 128 0 1 1-85.376 0v-95.168c-93.824-11.328-157.312-59.904-197.12-117.12a341.9 341.9 0 0 1-56-142.656A128 128 0 0 1 128 213.312zm640-42.688A42.688 42.688 0 1 0 768 256a42.688 42.688 0 0 0 0-85.312M512 768a42.688 42.688 0 1 0 0 85.312A42.688 42.688 0 0 0 512 768" />
  </svg>
);
export default SvgBifurcate;
