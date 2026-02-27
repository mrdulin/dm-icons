import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDelete1 = ({
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
    <path d="M320 42.688h384v128h234.624V256h-86.528L830.72 981.312H193.28L171.904 256H85.312v-85.312H320zm85.312 128h213.312V128H405.312zM257.28 256l18.816 640h471.808l18.816-640zm134.016 139.008L512 515.648l120.64-120.64 60.352 60.288L572.288 576l120.704 120.704-60.352 60.288L512 636.352l-120.704 120.64-60.352-60.288L451.648 576 330.88 455.296l60.352-60.288z" />
  </svg>
);
export default SvgDelete1;
