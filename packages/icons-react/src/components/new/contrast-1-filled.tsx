import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContrast1Filled = ({
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
    <path d="M554.688 130.368v76.16l93.184-53.76a381.6 381.6 0 0 0-93.184-22.4m181.568 69.888L554.688 305.024v172.48l285.568-164.928a385.9 385.9 0 0 0-104-112.32m140.096 190.08L554.688 576v172.416l339.2-195.84a388.5 388.5 0 0 0-17.536-162.24M862.4 669.312 554.688 846.976v46.72A384.32 384.32 0 0 0 862.4 669.312M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0" />
  </svg>
);
export default SvgContrast1Filled;
