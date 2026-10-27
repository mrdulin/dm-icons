import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLightningOutlined = ({
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
    <path
      fill="currentColor"
      d="M6.184 9.165H3.5a.5.5 0 0 1-.467-.677L5.7 1.489a.5.5 0 0 1 .468-.322h4.499a.5.5 0 0 1 .463.688L9.576 5.666H12.5a.5.5 0 0 1 .376.83L5.709 14.66c-.348.397-.994.053-.859-.458zm.327-6.998L4.226 8.166h2.607a.5.5 0 0 1 .483.627l-.955 3.61 5.034-5.737H8.833a.5.5 0 0 1-.463-.689l1.552-3.81z"
    />
    <path
      fill="currentColor"
      d="m6.167 1.167-.075.006a.5.5 0 0 0-.393.316L3.033 8.488a.5.5 0 0 0 .403.673l.064.004h2.684L4.85 14.203l-.016.094c-.037.426.473.698.806.43l.07-.066 7.165-8.165a.5.5 0 0 0-.376-.83v-.05a.55.55 0 0 1 .413.913h-.001l-7.164 8.164c-.383.437-1.094.059-.945-.503l1.317-4.974H3.501a.55.55 0 0 1-.515-.746l2.666-6.998a.55.55 0 0 1 .515-.355zm3.755 1L8.37 5.977l-.02.062a.5.5 0 0 0 .417.623l.066.004h2.562l-5.034 5.736.955-3.609a.5.5 0 0 0 .017-.112l-.01-.114a.5.5 0 0 0-.035-.109l-.059-.097a.5.5 0 0 0-.283-.182l-.113-.013v-.05a.552.552 0 0 1 .532.69l-.901 3.403 4.82-5.493H8.833a.55.55 0 0 1-.509-.757l1.524-3.742H6.545L4.299 8.115h2.534v.05H4.226L6.51 2.168zm.744-1.05a.55.55 0 0 1 .51.757L9.65 5.616H12.5v.05H9.576l1.553-3.81a.5.5 0 0 0-.463-.689zm0 0v.05h-4.5v-.05z"
    />
  </svg>
);
export default SvgLightningOutlined;
