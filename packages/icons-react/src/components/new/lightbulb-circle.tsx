import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLightbulbCircle = ({
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
    <path d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m469.376-384a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0M618.688 810.688H405.376v-85.376h213.312zm31.36-128H373.952l-9.984-28.544c-18.56-52.736-41.728-102.272-63.488-147.392a231.4 231.4 0 0 1-23.104-101.44A234.88 234.88 0 0 1 512 170.688a234.88 234.88 0 0 1 234.688 234.624c0 35.392-7.68 69.632-23.104 101.44-21.76 45.12-44.928 94.72-63.488 147.456zm-59.904-85.376c17.92-46.592 38.272-89.792 56.576-127.68 9.728-20.032 14.656-41.6 14.656-64.32A149.57 149.57 0 0 0 512 256a149.57 149.57 0 0 0-149.312 149.312c0 22.72 4.928 44.16 14.656 64.32 18.24 37.888 38.592 81.088 56.576 127.68h156.16z" />
  </svg>
);
export default SvgLightbulbCircle;
