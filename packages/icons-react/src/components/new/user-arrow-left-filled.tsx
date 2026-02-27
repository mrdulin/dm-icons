import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserArrowLeftFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376m314.56 533.12L699.392 725.44h303.36v85.312h-303.36L805.184 917.76l-60.672 59.968-207.296-209.664L744.576 558.4zm-255.808-21.12A276.16 276.16 0 0 0 490.624 768c0 64.384 21.952 123.584 58.752 170.688H85.312v-85.376a256 256 0 0 1 256-256h208z" />
  </svg>
);
export default SvgUserArrowLeftFilled;
