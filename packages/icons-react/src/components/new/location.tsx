import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocation = ({
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
    <path d="M512 128a298.69 298.69 0 0 0-298.688 298.688c0 122.112 76.032 239.936 159.488 331.2A1115.5 1115.5 0 0 0 512 885.632a1115 1115 0 0 0 139.2-127.744c83.456-91.264 159.488-209.088 159.488-331.2A298.69 298.69 0 0 0 512 128m0 862.464-24.192-16.64-.128-.064-.256-.192-.896-.64a374 374 0 0 1-14.72-10.688 1200.6 1200.6 0 0 1-161.984-146.816C222.72 720.128 128 581.888 128 426.752a384 384 0 1 1 768 0c0 155.2-94.656 293.376-181.824 388.8a1201 1201 0 0 1-173.568 155.2 347 347 0 0 1-3.2 2.24l-.832.64-.256.192h-.064L512 990.528zm0-649.088A85.312 85.312 0 1 0 512 512a85.312 85.312 0 0 0 0-170.624m-170.688 85.312a170.688 170.688 0 1 1 341.376 0 170.688 170.688 0 0 1-341.376 0" />
  </svg>
);
export default SvgLocation;
