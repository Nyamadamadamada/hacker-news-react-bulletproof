interface Props {
  label: string;
  style: string;
}
const HTMLLabel = ({ label, style }: Props) => {
  const createStoryText = (text: string) => {
    return { __html: text };
  };
  return (
    <div
      dangerouslySetInnerHTML={createStoryText(label)}
      className={style}
    ></div>
  );
};

export default HTMLLabel;
