import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSitemap = ({
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
    <path d="M234.624 170.688a64 64 0 1 0 0 128 64 64 0 0 0 0-128m-149.312 64A149.312 149.312 0 0 1 377.792 192h268.416a149.376 149.376 0 1 1 0 85.312H377.792a148.4 148.4 0 0 1-11.776 28.416L718.272 657.92a149.312 149.312 0 1 1-60.352 60.352L305.728 366.08a148.5 148.5 0 0 1-28.416 11.776v268.416a149.44 149.44 0 1 1-85.312 0v-268.48A149.38 149.38 0 0 1 85.312 234.688m704-64a64 64 0 1 0 0 128 64 64 0 0 0 0-128m0 554.624a64 64 0 1 0 0 128 64 64 0 0 0 0-128m-554.688 0a64 64 0 1 0 0 128 64 64 0 0 0 0-128" />
  </svg>
);
export default SvgSitemap;
