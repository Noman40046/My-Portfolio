
import { TypeAnimation } from 'react-type-animation';

const AutoType = () => {
  return (
    <TypeAnimation style={{ color: '#4022E6' }}
      sequence={[
        'Web Designer.',
        1000, 
        'Front-End Web Developer.',
        1000 
        
      ]}
      wrapper="span"
      speed={280}
      repeat={Infinity}
    />
  );
};
export default AutoType;