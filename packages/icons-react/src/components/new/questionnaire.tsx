import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionnaire = ({
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
    <path d="M64 85.312h896V768H293.376L64 968.704zm85.312 85.376v609.92l112-97.92h613.376v-512zM512 320a42.69 42.69 0 0 0-42.688 42.688v42.624H384v-42.624a128 128 0 1 1 256 0c0 28.8-7.36 53.12-20.224 72.96a126.1 126.1 0 0 1-43.904 40.512c-7.36 4.224-14.656 7.552-21.056 10.112v15.04h-85.312v-42.624c0-18.112 10.432-29.312 15.36-33.728 5.12-4.48 10.24-7.04 12.608-8.192 4.544-2.112 9.984-4.032 13.184-5.12l.768-.256c8.128-2.88 15.36-5.44 22.144-9.344a41.15 41.15 0 0 0 14.72-12.992c3.072-4.736 6.4-12.544 6.4-26.368A42.69 42.69 0 0 0 512 320m-42.688 213.312h85.568v85.568h-85.568z" />
  </svg>
);
export default SvgQuestionnaire;
