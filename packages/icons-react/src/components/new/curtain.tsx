import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCurtain = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312V85.376zm85.312 318.528v449.536H295.04l-35.072-426.752H256c-31.104 0-60.224-8.256-85.376-22.784m172.928-1.28 37.12 450.816h262.656l37.056-450.88a171.5 171.5 0 0 1-40.384-33.6 170.24 170.24 0 0 1-128 57.792 170.24 170.24 0 0 1-128-57.792 171.5 171.5 0 0 1-40.448 33.6zM341.312 256h85.312a85.312 85.312 0 1 0 170.688 0h85.312a85.376 85.376 0 0 0 170.688 0v-85.312H170.624V256a85.312 85.312 0 1 0 170.688 0m512 147.84a169.86 169.86 0 0 1-89.28 22.784L728.96 853.376h124.352z" />
  </svg>
);
export default SvgCurtain;
