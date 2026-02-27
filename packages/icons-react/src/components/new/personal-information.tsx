import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPersonalInformation = ({
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
    <path d="M128 42.688h529.664L896 280.96v700.288H128zM213.312 128v768h597.376V316.352L622.336 128h-408.96zM512 384a64 64 0 1 0 0 128 64 64 0 0 0 0-128m-149.312 64a149.312 149.312 0 1 1 298.624 0 149.312 149.312 0 0 1-298.624 0M256 810.688A170.69 170.69 0 0 1 426.688 640h170.624A170.69 170.69 0 0 1 768 810.688v42.624h-85.312v-42.624c0-47.168-38.208-85.376-85.376-85.376H426.688c-47.168 0-85.376 38.208-85.376 85.376v42.624H256z" />
  </svg>
);
export default SvgPersonalInformation;
