import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkUnlink = ({
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
    <path d="m183.68 123.264 150.848 150.848-60.352 60.352L123.328 183.68l60.352-60.352zm253.824-72.896v192h-85.312v-192zM57.472 345.152h192v85.312h-192zm575.296-104.768-129.92 129.92-60.352-60.352 129.92-129.92a192 192 0 1 1 271.488 271.552l-129.856 129.92-60.352-60.416 129.92-129.856a106.688 106.688 0 1 0-150.848-150.848M240.512 632.576A106.688 106.688 0 0 0 391.36 783.424l129.92-129.856 60.352 60.352-129.92 129.92a192 192 0 0 1-271.488-271.552l129.856-129.92 60.352 60.352-129.92 129.92zm540.992-46.08h192v85.312h-192v-85.376zM678.848 774.4v192h-85.376v-192zm70.976-85.056 150.848 150.912-60.352 60.288-150.848-150.848 60.352-60.288z" />
  </svg>
);
export default SvgLinkUnlink;
