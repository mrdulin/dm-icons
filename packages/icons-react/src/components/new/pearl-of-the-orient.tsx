import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPearlOfTheOrient = ({
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
    <path d="m554.56 42.624.064 92.672a128 128 0 0 1 0 241.408v183.36a170.752 170.752 0 0 1 79.36 284.608l80.832 136.64h-99.2l-54.592-92.48a170.75 170.75 0 0 1-98.048 0l-54.528 92.48h-99.136l80.64-136.704a166.66 166.66 0 0 1-48.64-119.296c0-79.488 54.4-146.304 128-165.248v-183.36a128 128 0 0 1 0-241.408l-.064-92.608zM512 213.312a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376M512 640c-47.104 0-85.312 38.208-85.312 85.312 0 22.08 7.04 40.32 21.44 56.576a84.74 84.74 0 0 0 63.872 28.8 84.74 84.74 0 0 0 65.088-30.144A85.312 85.312 0 0 0 512 640" />
  </svg>
);
export default SvgPearlOfTheOrient;
