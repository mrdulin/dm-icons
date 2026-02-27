import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHistorySetting = ({
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
    <path d="M512 149.312c-62.272 0-120.704 15.68-171.776 43.2a364.6 364.6 0 0 0-136 127.488h158.4v85.312H64V106.688h85.312V248.96a449.9 449.9 0 0 1 150.4-131.584A448 448 0 0 1 960 512v42.688h-85.312V512A362.69 362.69 0 0 0 512 149.312M554.624 256v238.336l71.04 71.04-60.352 60.288-96-96V256zM146.88 507.776l4.48 42.432A362.75 362.75 0 0 0 512 874.688h42.624V960H512A448 448 0 0 1 66.432 559.104l-4.48-42.432zM832 597.504v48.64c22.72 6.784 43.2 18.88 59.968 34.752l42.24-24.32 42.624 73.856-42.24 24.32a149.8 149.8 0 0 1 0 69.312l42.24 24.32-42.624 73.984-42.368-24.448A149.2 149.2 0 0 1 832 932.48v48.832h-85.376V932.48a149.2 149.2 0 0 1-59.84-34.56l-42.304 24.448-42.688-73.92 42.24-24.384a149.8 149.8 0 0 1 0-69.248l-42.24-24.32 42.688-73.984 42.176 24.384a149.1 149.1 0 0 1 60.032-34.688v-48.64H832zm-42.688 127.808a64 64 0 1 0 0 128 64 64 0 0 0 0-128" />
  </svg>
);
export default SvgHistorySetting;
