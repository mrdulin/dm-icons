import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineStrongMagnetOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.672 3.067a.51.51 0 0 0-.673.154l-1.54 2.285-.716-1.725-2.751 3.685-.03.045a.486.486 0 0 0 .138.643l.046.03a.51.51 0 0 0 .656-.137l1.689-2.261.755 1.821 2.591-3.843.028-.047a.487.487 0 0 0-.193-.65M4.8 8.463l5.318-5.21a.51.51 0 0 1 .71 0l2.584 2.532a.485.485 0 0 1 0 .696l-5.318 5.21c-.606.593-.577 1.64.057 2.262.635.623 1.703.65 2.309.056l5.317-5.21a.51.51 0 0 1 .71 0l2.584 2.531a.485.485 0 0 1 0 .696l-5.318 5.21c-2.427 2.38-6.45 2.342-8.896-.055S2.37 10.84 4.8 8.463m7.546-2.33-1.874-1.836-4.961 4.862c-2.033 1.992-2 5.31.057 7.326s5.443 2.047 7.476.056l2.64-2.588-1.393-1.366.71-.695 1.393 1.365 1.612-1.58-1.874-1.835-4.962 4.863c-.982.963-2.629.944-3.655.013l-.074-.07c-1.02-.998-1.063-2.667-.057-3.653l2.64-2.588-1.4-1.372.711-.696 1.4 1.372z" />
  </svg>
);
export default SvgKlineStrongMagnetOutlined;
