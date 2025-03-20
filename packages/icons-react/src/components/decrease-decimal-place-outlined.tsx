import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDecreaseDecimalPlaceOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.875 6.425H3.45V8H1.875zm6.125 7h1.575V15H8zm-1.534-1.434H1.558c-.335 0-.558-.223-.558-.558s.223-.558.558-.558h4.797L5.127 9.648a.54.54 0 0 1 0-.78.54.54 0 0 1 .781 0l2.231 2.23a.54.54 0 0 1 0 .781L5.91 14.11c-.112.112-.224.112-.447.112s-.335 0-.446-.112a.54.54 0 0 1 0-.78zm6.303-3.553c.892 0 1.45.444 1.673.778.335.556.558 1.335.558 2.447s-.223 1.891-.558 2.447c-.334.556-.892.89-1.673.89-1.004 0-1.45-.445-1.673-.89-.335-.556-.558-1.335-.558-2.447s.223-1.89.558-2.336c.334-.556.892-.89 1.673-.89m0 1c-.446 0-.67.223-.781.334-.223.445-.335 1.001-.335 1.891s.112 1.557.335 1.891c.112.111.335.334.78.334.447 0 .67-.223.782-.334.223-.334.334-1.001.334-1.89 0-.89-.111-1.558-.334-1.892-.112-.111-.335-.333-.781-.333m0-8.438c1.004 0 1.45.438 1.673.766.335.547.558 1.312.558 2.406s-.223 1.969-.558 2.516c-.334.546-.892.875-1.673.875-.893 0-1.45-.438-1.673-.766-.335-.547-.558-1.313-.558-2.406s.223-1.97.558-2.516c.334-.547.892-.875 1.673-.875m0 1.094c-.446 0-.67.219-.781.328-.223.328-.335.984-.335 1.86 0 .874.112 1.53.335 1.859.112.109.335.328.78.328.447 0 .67-.219.782-.328.223-.438.334-.985.334-1.86s-.111-1.531-.334-1.86a1.03 1.03 0 0 0-.781-.327M7.19 1c1.004 0 1.45.445 1.674.89.334.556.557 1.335.557 2.447s-.223 1.89-.557 2.336c-.335.556-.893.89-1.674.89-.892 0-1.45-.445-1.673-.78-.335-.555-.558-1.334-.558-2.446s.223-1.891.558-2.447S6.41 1 7.19 1m0 1.112c-.446 0-.67.223-.78.334-.224.334-.335 1.001-.335 1.89 0 .89.111 1.558.334 1.892.112.111.335.333.781.333s.67-.222.781-.333c.223-.445.335-1.001.335-1.891s-.112-1.557-.335-1.891a1.02 1.02 0 0 0-.78-.334" />
  </svg>
);
export default SvgDecreaseDecimalPlaceOutlined;
