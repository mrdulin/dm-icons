import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEtfFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.2}
      d="M0 2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"
    />
    <path
      fill="currentColor"
      d="M12.047 5.686H9.114L8.789 7.51h1.697l-.322 1.813H8.467l-.31 1.749h2.933l-.322 1.813H5.98l1.599-9h4.788zM19.286 5.66h-1.92l-1.284 7.226h-1.855l1.284-7.226h-1.92l.314-1.774h5.696zM25.66 5.686h-2.933l-.324 1.825H24.1l-.323 1.813h-1.696l-.63 3.549h-1.855l1.596-8.987h4.788z"
    />
  </svg>
);
export default SvgEtfFilled;
