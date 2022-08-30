import type { ParentProps } from 'solid-js';

interface CardProps extends ParentProps {
  rootClass?: string;
}

export default function Card(props: CardProps) {
  return (
    <div
      class={`flex items-center py-2 space-y-1 rounded-md shadow-md bg-primaryDark bg-opacity-50 ${
        props.rootClass || ''
      }`}
    >
      {props.children}
    </div>
  );
}
