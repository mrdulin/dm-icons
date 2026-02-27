import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSavingPotFilled = ({
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
    <path d="M460.864 960H221.76l-33.6-151.168c-56.32-25.088-126.528-68.416-175.616-117.248L0 679.104V362.688h82.56l40.64-67.84-53.248-133.12 48.384-11.264a241.02 241.02 0 0 1 170.368 25.28l.832-.512A964 964 0 0 1 320 157.824c18.432-10.176 43.072-23.04 64.192-31.616 19.52-7.872 38.016-14.528 56.064-19.968a277.312 277.312 0 0 0 522.624 185.6l4.032 6.848a426.75 426.75 0 0 1-94.976 540.032L844.8 960H605.76l-18.944-85.376H479.872l-19.072 85.44zM192 490.752h85.504V405.12H192v85.504zM704 0a192 192 0 1 1 0 384 192 192 0 0 1 0-384" />
  </svg>
);
export default SvgSavingPotFilled;
