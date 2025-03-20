import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDotsSpinnerOutlined = ({
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
    <g fill="currentColor">
      <path d="M7.862 0C6.72 0 5.793.91 5.793 2.034s.926 2.034 2.07 2.034c1.142 0 2.068-.91 2.068-2.034S9.005 0 7.862 0m4.389 1.855c-1.105 0-2 .88-2 1.966s.895 1.966 2 1.966 2-.88 2-1.966-.895-1.966-2-1.966m-8.778.407c-.876 0-1.586.698-1.586 1.559s.71 1.56 1.586 1.56S5.06 4.681 5.06 3.82s-.71-1.56-1.586-1.56" />
      <path
        d="M14.069 6.237c-1.067 0-1.931.85-1.931 1.899s.864 1.898 1.931 1.898c1.066 0 1.931-.85 1.931-1.898s-.865-1.899-1.931-1.899"
        opacity={0.85}
      />
      <path
        d="M12.251 10.62c-1.028 0-1.862.82-1.862 1.83s.834 1.83 1.862 1.83 1.862-.819 1.862-1.83c0-1.01-.834-1.83-1.862-1.83"
        opacity={0.7}
      />
      <path
        d="M7.862 12.475c-.99 0-1.793.789-1.793 1.762 0 .974.803 1.763 1.793 1.763s1.793-.79 1.793-1.763-.803-1.762-1.793-1.762"
        opacity={0.55}
      />
      <path
        d="M3.473 10.755c-.952 0-1.724.76-1.724 1.695 0 .936.772 1.695 1.724 1.695s1.724-.759 1.724-1.695-.772-1.695-1.724-1.695"
        opacity={0.4}
      />
      <path
        d="M1.655 6.508C.741 6.508 0 7.237 0 8.136s.741 1.627 1.655 1.627S3.31 9.034 3.31 8.136c0-.899-.74-1.628-1.655-1.628"
        opacity={0.25}
      />
    </g>
  </svg>
);
export default SvgDotsSpinnerOutlined;
