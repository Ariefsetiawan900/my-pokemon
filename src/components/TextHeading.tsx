import {useNavigate } from 'react-router-dom'

interface TextHeadingProps {
  text: string | undefined;
}

const TextHeading = ({ text }: TextHeadingProps) => {
  const navigate = useNavigate();
  return (
    <h1 className="text-transparent bg-gradient-to-r from-ctp-blue to-ctp-white text-7xl font-bold bg-clip-text capitalize" onClick={()=>navigate('/')}>
      {text}
    </h1>
  );
};

export default TextHeading;
