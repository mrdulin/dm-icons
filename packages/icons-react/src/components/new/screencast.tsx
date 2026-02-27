import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScreencast = ({
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
    <path d="M42.688 85.312h938.688v725.376h-256v-85.376H896V170.688H128l.064 554.624h170.624v85.376h-256zm195.648 853.376L512 664.96l273.728 273.664H238.272zm206.08-85.376h135.296L512 785.664l-67.648 67.648z" />
  </svg>
);
export default SvgScreencast;
