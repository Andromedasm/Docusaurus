import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBox: React.FC = () => {
    const styles = useSpring({
        loop: true,
        to: [{ opacity: 1, transform: 'scale(1.5)' }, { opacity: 0.5, transform: 'scale(1)' }],
        from: { opacity: 0.5, transform: 'scale(1)' },
    });

    return <animated.div style={styles} className="animated-box" />;
};

export default AnimatedBox;
