import type { ParentProps } from 'solid-js';
import { Motion } from '@motionone/solid';

interface HeroProps extends ParentProps {}

export default function Hero(props: HeroProps) {
  return (
    <Motion.div
      class="text-4xl md:text-6xl"
      initial={{
        x: '100vw',
      }}
      animate={{
        x: 0,
        transition: {
          easing: 'ease-in-out',
          delay: 0.1,
          duration: 0.8,
        },
      }}
    >
      {props.children}
    </Motion.div>
  );
}
