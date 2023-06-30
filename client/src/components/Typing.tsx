import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                'Welcome',
                700,
                'My name is Arsenii',
                700,
                'My name is Arsenii Nikolenko',
            ]}
            wrapper="span"
            cursor={true}
            style={{ fontSize: '4em', display: 'inline-block' }}
        />
    );
};

export default TypingAnimation;