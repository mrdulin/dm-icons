import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoTwitter = ({
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
    <path d="M682.689 170.688A170.69 170.69 0 0 0 512 341.376v85.312h-42.688A552.77 552.77 0 0 1 93.76 280.128a405.504 405.504 0 0 0 247.68 459.52l73.92 29.312-65.28 45.44a574.7 574.7 0 0 1-108.928 59.52 469.376 469.376 0 0 0 612.16-447.232v-65.152l9.728-11.84c23.296-28.416 39.68-49.728 54.528-70.72a228 228 0 0 1-33.408 10.88l-33.088 7.488-14.784-30.464a170.69 170.69 0 0 0-153.6-96.192m297.6 74.88 43.456 29.696-24.128 35.2c-17.728 25.984-35.456 49.92-60.928 81.472v34.752A554.688 554.688 0 0 1 98.113 902.08l-96-57.856 110.144-20.608a487 487 0 0 0 124.224-41.152A490.37 490.37 0 0 1 0 362.624c0-63.744 12.16-124.8 34.432-180.864l26.624-67.136 45.952 55.68a468.42 468.42 0 0 0 319.68 169.152 256 256 0 0 1 467.008-143.04c15.936-7.04 32.64-16.384 43.008-24.768l33.28-26.816 53.504 66.432-33.216 26.816a169 169 0 0 1-9.984 7.488" />
  </svg>
);
export default SvgLogoTwitter;
