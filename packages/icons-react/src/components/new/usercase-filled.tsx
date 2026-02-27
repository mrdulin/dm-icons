import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsercaseFilled = ({
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
    <path d="M768 213.312c39.36 0 80.768 9.92 114.176 32.192 33.792 22.464 56.512 56.32 56.512 95.808s-22.72 73.344-56.512 95.872c-33.408 22.272-74.88 32.128-114.176 32.128s-80.768-9.856-114.176-32.128c-33.728-22.528-56.448-56.384-56.448-95.872s22.72-73.344 56.448-95.808c33.408-22.272 74.88-32.192 114.176-32.192M256 462.08a128 128 0 1 0-85.312 0V512H85.376v85.376h85.312v67.648L67.648 768 128 828.352l85.376-85.312 85.44 85.312 60.288-60.416-103.04-102.912v-67.712h85.312V512H256zm149.376-163.328h128V384h-128v-85.312zm362.624 256c39.36 0 80.768 9.856 114.176 32.128 33.792 22.528 56.512 56.32 56.512 95.872 0 39.424-22.72 73.344-56.512 95.808-33.408 22.272-74.88 32.192-114.176 32.192s-80.768-9.92-114.176-32.192c-33.728-22.464-56.448-56.32-56.448-95.808s22.72-73.344 56.448-95.872c33.408-22.272 74.88-32.128 114.176-32.128M405.376 640h128v85.312h-128z" />
  </svg>
);
export default SvgUsercaseFilled;
