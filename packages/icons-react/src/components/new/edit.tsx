import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdit = ({
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
    <path d="M671.872 125.76c33.28-33.28 87.36-33.28 120.704 0l105.6 105.6c33.28 33.28 33.28 87.36 0 120.64l-507.52 507.52-272.128 45.888 45.888-272.192 507.456-507.52zm-9.728 130.432 105.6 105.6 70.08-70.08-105.6-105.6-70.144 70.08zm45.248 165.952-105.6-105.6-357.76 357.76-21.44 126.976 127.04-21.44 357.76-357.76z" />
  </svg>
);
export default SvgEdit;
