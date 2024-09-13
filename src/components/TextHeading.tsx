interface TextHeadingProps {
  text: string | undefined;
}

const TextHeading = ({ text }: TextHeadingProps) => {
  return (
    <h1 className="text-transparent bg-gradient-to-r from-ctp-blue to-ctp-white text-7xl font-bold bg-clip-text capitalize">
      {text}
    </h1>
  );
};

export default TextHeading;
