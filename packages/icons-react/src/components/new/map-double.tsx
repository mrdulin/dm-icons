import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapDouble = ({
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
    <path d="m320 78.592 195.2 113.856L746.56 96v272l192-80v520.512L704 945.408l-195.2-113.92L277.312 928V656l-192 80V215.488zM277.312 563.52V407.488L495.872 280 320 177.408l-149.376 87.04V608zm250.24-283.84 133.76 78.08V224zm219.072 180.736v361.28l106.688-62.208V416zm-85.312 361.28V456.512L554.624 394.24v365.184l106.688 62.208zm-192-66.176V394.304l-106.688 62.208V800z" />
  </svg>
);
export default SvgMapDouble;
