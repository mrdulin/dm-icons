type GetEMSizePropsParams = {
  width: number;
  height: number;
};
export function getEMSizeProps({ width, height }: GetEMSizePropsParams) {
  const ratio = width / height;
  return {
    width: ratio + 'em',
    height: '1em',
  };
}
