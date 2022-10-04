import type { ParentProps } from 'solid-js';
import { Motion } from '@motionone/solid';

interface CardProps extends ParentProps {
  rootClass?: string;
  order: number;
}

export default function Card(props: CardProps) {
  return (
    <Motion.div
      class={`flex flex-col md:flex-row items-center py-2 space-y-4 md:space-y-1 rounded-md shadow-md bg-primaryDark bg-opacity-50 ${
        props.rootClass || ''
      }`}
      initial={{
        x: '100vw',
      }}
      animate={{
        x: 0,
        transition: {
          easing: 'ease-in-out',
          delay: 0.1 * props.order,
          duration: 0.8,
        },
      }}
      hover={{
        scale: 1.05,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
      }}
    >
      {props.children}
    </Motion.div>
  );
}
