import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNumberThree = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.212 2q1.663 0 2.524.713.861.697.681 1.98a3.05 3.05 0 0 1-.51 1.347q-.399.57-.979.936a4.4 4.4 0 0 1-1.26.538l-.006.048q1.258.158 1.852.823.595.666.436 1.79a3.9 3.9 0 0 1-.713 1.775q-.573.777-1.614 1.236-1.022.444-2.557.444-.961 0-1.691-.159A6.5 6.5 0 0 1 4 13.011l.285-2.027a6 6 0 0 0 1.362.554q.725.19 1.349.19 1.136 0 1.63-.443.51-.444.625-1.252.066-.475-.097-.793-.161-.331-.667-.49Q8 8.575 7.023 8.575h-.735l.258-1.837h.752q.912 0 1.435-.19.525-.207.763-.54.257-.348.32-.792.084-.601-.205-.935-.288-.348-.976-.348-.495 0-.947.142a4.2 4.2 0 0 0-.813.317 5 5 0 0 0-.58.365L5.408 3.11q.477-.317 1.025-.57a6 6 0 0 1 1.24-.397A7.7 7.7 0 0 1 9.211 2" />
  </svg>
);
export default SvgNumberThree;
