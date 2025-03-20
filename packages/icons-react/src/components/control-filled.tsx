import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgControlFilled = ({
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
    <path d="M3.11 16c-.44 0-.794-.296-.794-.737V8.505c0-.44.353-.737.794-.737s.794.297.794.737v6.758c0 .438-.381.737-.794.737M5.22 4.21c0 1.18-.938 2.127-2.11 2.127A2.11 2.11 0 0 1 1 4.21c0-.868.537-1.639 1.316-1.97V.8c0-.46.338-.8.794-.8.427 0 .794.346.794.8v1.441a2.15 2.15 0 0 1 1.317 1.97M15 6.106c0 1.18-.94 2.127-2.11 2.127a2.11 2.11 0 0 1-2.11-2.127c0-.867.536-1.638 1.316-1.97V.8c0-.46.337-.8.794-.8.426 0 .794.346.794.8v3.336A2.15 2.15 0 0 1 15 6.106M12.89 16c-.443 0-.794-.3-.794-.743v-5.25c0-.443.35-.744.794-.744.442 0 .794.301.794.743v5.25c0 .44-.38.744-.794.744m-7-4.21c0-1.18.939-2.127 2.11-2.127s2.11.947 2.11 2.126c0 .868-.536 1.639-1.316 1.97V15.2c0 .454-.368.8-.794.8a.775.775 0 0 1-.794-.8v-1.441a2.15 2.15 0 0 1-1.316-1.97M8 8.231c-.44 0-.794-.294-.794-.733V.733C7.206.293 7.56 0 8 0s.794.293.794.733v6.766c0 .408-.391.733-.794.733" />
  </svg>
);
export default SvgControlFilled;
