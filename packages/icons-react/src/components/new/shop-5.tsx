import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShop5 = ({
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
    <path d="M139.904 85.312h744.128l41.472 124.352c7.68 23.168 16.64 56.832 6.976 91.904-7.04 25.344-19.648 48.256-36.48 67.328v484.48h42.624v85.312H85.312v-85.312H128v-484.48A170.18 170.18 0 0 1 85.312 256v-6.912l54.592-163.712zm73.408 336v432h128v-298.56h341.312V853.44h128V421.312A170.82 170.82 0 0 1 640 368.896a170.24 170.24 0 0 1-128 57.792 170.24 170.24 0 0 1-128-57.792 170.24 170.24 0 0 1-170.688 52.416M426.624 256a85.312 85.312 0 1 0 170.688 0v-85.312H426.624zm-85.312-85.312H201.408l-30.528 91.52c1.6 22.784 12.16 43.008 28.16 57.408A85.312 85.312 0 0 0 341.312 256zm341.312 0V256a85.312 85.312 0 0 0 167.616 22.848c2.56-9.088 1.088-21.824-5.696-42.24l-22.016-65.92zm-85.312 682.624V640H426.624v213.376h170.688z" />
  </svg>
);
export default SvgShop5;
