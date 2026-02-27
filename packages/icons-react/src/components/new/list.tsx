import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgList = ({
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
    <path d="M192 256h42.688v85.312H64V256h42.688v-85.312H64V85.312h42.688c47.104 0 85.312 38.208 85.312 85.376zm746.688 597.312h-640V768h640zm0-298.624h-640v-85.376h640zm0-298.688h-640v-85.312h640zM64 394.688h105.344a65.28 65.28 0 0 1 46.208 111.424L177.664 544h56.96v85.312H64v-56.96C64 549.696 72.96 528 88.96 512l32-32H64zm170.688 362.624c0-47.104-38.208-85.312-85.376-85.312H64v85.312h85.312V768h-64v85.312h64V864H64v85.312h85.312c47.168 0 85.376-38.208 85.376-85.312z" />
  </svg>
);
export default SvgList;
