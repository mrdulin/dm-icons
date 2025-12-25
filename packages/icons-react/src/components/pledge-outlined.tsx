import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPledgeOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd" transform="translate(-2 -2)">
      <rect width={15} height={15} x={0.5} y={0.5} stroke="#666" rx={2} />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M5.211 13.5a9 9 0 0 0-.605-1.073q1.395-.3 2.19-.633.807-.34 1.222-.81.39-.445.528-1.131.09-.434.089-1.073h1.234a8 8 0 0 1-.1 1.096q-.09.487-.173.74A83 83 0 0 1 13.5 12.38l-.629 1.073a73 73 0 0 0-3.708-1.976q-.48.691-1.424 1.173-.956.493-2.528.85m-1.75-.012q-.504-.48-.961-.885.635-1.12.848-2.17.225-1.073.226-3.084V2.963q5.025-.035 9.244-.463l.42 1.132q-1.755.146-3.482.234v1.22h3.554v1.032H9.756V7.19h2.901v3.747h-1.145V8.21h-4.61v2.727H5.734V7.19h2.824V6.118H5.229V5.086h3.329v-1.15q-.415.012-1.252.042-1.71.052-2.534.07v3.354q0 1.56-.112 2.539a8.5 8.5 0 0 1-.398 1.864 9.5 9.5 0 0 1-.8 1.683"
      />
    </g>
  </svg>
);
export default SvgPledgeOutlined;
