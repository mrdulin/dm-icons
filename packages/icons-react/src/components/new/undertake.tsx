import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUndertake = ({
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
    <path d="M378.112 374.464a58.88 58.88 0 0 0-41.664 17.152L243.2 484.864v176.448h256.64l262.272-65.536 159.616-68.096a27.52 27.52 0 0 0-20.48-50.688l-.896.192-288.96 66.496H451.2v-85.44h138.496a41.92 41.92 0 0 0 0-83.84H378.112zm337.856 57.6 163.648-37.632a112.96 112.96 0 0 1 79.36 210.048l-1.152.576-168.448 71.872-279.04 69.76H0V424.512h182.912L276.16 331.2a144.2 144.2 0 0 1 102.08-42.048h211.392a127.232 127.232 0 0 1 126.336 142.912m-558.08 77.76H85.312v151.488h72.576z" />
  </svg>
);
export default SvgUndertake;
