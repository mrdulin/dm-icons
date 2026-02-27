import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddressBook = ({
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
    <path d="M128 256A170.69 170.69 0 0 1 298.688 85.312H896v853.376H298.688A170.69 170.69 0 0 1 128 768zm85.312 364.16a169.86 169.86 0 0 1 85.376-22.848h512V170.688h-85.376v288.64L576 369.728l-149.312 89.6v-288.64h-128c-47.168 0-85.376 38.208-85.376 85.312zm597.376 62.528h-512a85.312 85.312 0 1 0 0 170.624h512zM640 170.688H512v137.984l64-38.4 64 38.4z" />
  </svg>
);
export default SvgAddressBook;
