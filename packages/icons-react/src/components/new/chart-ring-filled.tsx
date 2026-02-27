import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartRingFilled = ({
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
    <path d="M554.688 44.608v280.128a192.26 192.26 0 0 1 144.576 144.64h280.192A469.44 469.44 0 0 0 554.688 44.544zM981.312 507.52v8.96a346 346 0 0 0 0-8.96m-1.856 47.168H699.264a190.8 190.8 0 0 1-24.704 59.52l198.144 198.144a467.2 467.2 0 0 0 106.752-257.664m-132.48 286.08-6.208 6.144c2.112-1.984 4.16-4.096 6.208-6.144m-34.624 31.936L614.208 674.56a192 192 0 1 1-144.896-349.824V44.608a469.376 469.376 0 1 0 343.04 828.096" />
  </svg>
);
export default SvgChartRingFilled;
