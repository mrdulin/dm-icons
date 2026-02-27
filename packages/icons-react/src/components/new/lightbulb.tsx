import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLightbulb = ({
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
    <path d="M512 85.312a264.83 264.83 0 0 0-264.512 264.576c0 39.04 7.168 68.736 26.88 116.16 6.912 16.448 17.28 38.784 29.76 65.408l19.328 41.6c16 34.752 33.024 72.96 47.36 109.632h282.816c14.528-36.416 31.616-74.624 47.488-109.44l16.64-36.288c13.376-28.864 24.576-53.312 31.808-70.784 19.648-47.616 26.944-77.248 26.944-116.288A264.96 264.96 0 0 0 512 85.312M162.112 349.888A350.144 350.144 0 0 1 512 0a350.27 350.27 0 0 1 349.824 349.888c0 53.888-11.136 94.976-33.344 148.864-7.936 19.2-20.352 46.08-34.048 75.84l-15.68 34.112a2085 2085 0 0 0-55.936 131.52L712.512 768H311.04l-10.112-28.416c-14.4-40.704-35.008-87.296-55.04-130.88a8096 8096 0 0 0-18.048-38.848 2136 2136 0 0 1-32.192-71.04c-22.464-54.016-33.536-95.04-33.536-148.928M320 810.688h384V896H320zm85.312 128h213.376V1024H405.312z" />
  </svg>
);
export default SvgLightbulb;
