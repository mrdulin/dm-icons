import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSwapOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.5 17.5"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.773 1.75a.4.4 0 0 0-.208.042.4.4 0 0 0-.208.358v1.764S.982 4.187.837 4.292c-.213.152-.354.26-.354.672s.14.54.354.693c.145.105 11.52.294 11.52.294v1.807c0 .152.076.286.208.357.133.07.292.063.416-.021 1.61-1.098 4.477-2.804 4.534-2.878a.4.4 0 0 0 .104-.252.4.4 0 0 0-.104-.252c-.057-.074-2.925-1.801-4.534-2.899a.4.4 0 0 0-.208-.063M5.245 9.837a.4.4 0 0 0-.208.063C3.428 10.997.561 12.704.504 12.777a.4.4 0 0 0-.104.252c0 .092.044.176.104.253.057.073 2.924 1.8 4.533 2.898a.4.4 0 0 0 .416.021.4.4 0 0 0 .208-.357V14.08s11.375-.273 11.521-.378c.213-.153.354-.26.354-.673 0-.412-.14-.54-.354-.693-.146-.105-11.52-.294-11.52-.294v-1.806a.4.4 0 0 0-.209-.357.4.4 0 0 0-.208-.042" />
  </svg>
);
export default SvgSwapOutlined;
