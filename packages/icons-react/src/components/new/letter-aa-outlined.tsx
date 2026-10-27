import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLetterAaOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.496 6.75a3.15 3.15 0 0 1 1.592.516l.257.17v-.54q0-.019.013-.032l.033-.014h1.062q.017 0 .03.013a.04.04 0 0 1 .013.03v5.997q0 .009-.003.018l-.009.014-.015.01-.016.003H14.39a.05.05 0 0 1-.034-.014.05.05 0 0 1-.012-.034v-.537l-.257.169a3.145 3.145 0 1 1-1.592-5.769m.622 1.308a1.99 1.99 0 0 0-2.164.43 1.986 1.986 0 1 0 2.164-.43M5.534 2.964l.025.008a.05.05 0 0 1 .016.023l3.176 9.816a.044.044 0 0 1-.006.039.04.04 0 0 1-.036.017H7.32a.04.04 0 0 1-.023-.006.04.04 0 0 1-.013-.02l-.002-.005-.71-2.161-.037-.115h-3.82l-.038.115-.71 2.16v.002a.04.04 0 0 1-.016.022.04.04 0 0 1-.026.008H.542a.1.1 0 0 1-.021-.005.1.1 0 0 1-.017-.013.1.1 0 0 1-.008-.02l.001-.022 3.157-9.81a.05.05 0 0 1 .018-.024.05.05 0 0 1 .027-.01zM3.16 9.185h2.937L6.03 8.97 4.791 5.09l-.158-.492z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLetterAaOutlined;
