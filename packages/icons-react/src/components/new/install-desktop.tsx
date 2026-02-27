import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstallDesktop = ({
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
    <path d="M42.688 128h554.688v85.312H128v512h768v-256h85.376v341.376H42.688zm128 768h682.688v85.312H170.688zM853.376 42.752V238.4l64-64 60.416 60.288-167.04 167.04-167.104-167.04 60.288-60.416 64.128 64.128V42.752z" />
  </svg>
);
export default SvgInstallDesktop;
