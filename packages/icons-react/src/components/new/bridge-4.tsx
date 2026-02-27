import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBridge4 = ({
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
    <path d="M981.312 85.376v85.312h-50.368L896 345.536v593.152h-85.376v-601.6l33.28-166.4H692.032l33.28 166.4v601.6H640V345.6l-35.008-174.912H418.944L384 345.6v593.088h-85.376v-601.6l33.28-166.4H180.032l33.28 166.4v601.6H128V345.6L92.992 170.688H42.688l-.064-85.312z" />
  </svg>
);
export default SvgBridge4;
