import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextformatColor = ({
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
    <path d="m845.376 747.776-16.832-39.232-256-597.376-11.072-25.856h-98.944l-11.072 25.856-256 597.376-16.768 39.232 78.4 33.6 16.832-39.232 77.824-181.568H672.32l77.824 181.568 16.768 39.232zM417.792 475.264h-29.504L512 186.56l123.776 288.704zm392.896 463.36h42.688v-85.312H170.688v85.376h640z" />
  </svg>
);
export default SvgTextformatColor;
