import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAttic1 = ({
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
    <path d="M476.544 61.632 512 8.576l35.456 53.056.256.32.832 1.28 3.712 5.312a1176 1176 0 0 0 68.288 87.04c45.696 52.864 105.92 112.64 168.704 148.8 19.84 11.456 40.768 15.616 64 15.616H896v85.312h-42.688c-13.888 0-28.16-1.024-42.624-3.648v323.648H896v85.376h-42.688v128H768v-128H554.624v128h-85.376v-128H256v128h-85.376v-128h-42.688v-85.376h85.44l-.064-323.648c-14.528 2.624-28.8 3.648-42.688 3.648h-42.688V320h42.688c23.232 0 44.16-4.16 64-15.616 62.784-36.16 123.072-95.872 168.832-148.736a1176 1176 0 0 0 72-92.416l.896-1.28zM298.624 384l.064 341.312H384v-93.824a128 128 0 1 1 256 0v93.824h85.248V384zm341.696-85.312c-32-29.184-60.608-59.84-84.352-87.232A1265 1265 0 0 1 512 157.632c-12.096 15.616-26.88 34.048-44.032 53.824-23.68 27.392-52.352 58.048-84.288 87.232zm-85.632 426.624v-93.824a42.688 42.688 0 0 0-85.376 0v93.824z" />
  </svg>
);
export default SvgAttic1;
