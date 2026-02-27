import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureClick = ({
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
    <path d="M512 21.312V167.04h-85.376V21.312zM213.312 131.648l103.04 103.04L256 294.912l-103.04-103.04 60.352-60.288zm572.352 60.288-103.04 103.04-60.352-60.352 103.04-103.04zM469.312 290.56a32.256 32.256 0 0 0-32.256 32.256v428.032L245.12 708.16l-4.288 6.4 146.176 190.08a32.32 32.32 0 0 0 25.6 12.672H714.88c13.888 0 26.24-8.96 30.656-22.08l76.032-228.288a32.32 32.32 0 0 0-14.336-38.08l-154.688-90.24a32.26 32.26 0 0 0-16.256-4.48h-134.72V322.816a32.256 32.256 0 0 0-32.256-32.256m-117.568 32.256a117.568 117.568 0 1 1 235.136 0v126.016h49.408c20.864 0 41.28 5.568 59.328 16l154.624 90.304a117.63 117.63 0 0 1 52.288 138.752l-76.032 228.288a117.63 117.63 0 0 1-111.616 80.448H412.608c-36.544 0-71.04-16.96-93.248-45.952L135.936 718.144l40.128-60.288c18.368-27.52 51.84-40.96 84.096-33.792l91.52 20.352v-321.6z" />
  </svg>
);
export default SvgGestureClick;
