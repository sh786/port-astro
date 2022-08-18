import type { ParentProps } from 'solid-js';

interface ColumnCardProps extends ParentProps {
  rootClass?: string;
}

export default function ColumnCard(props: ColumnCardProps) {
  return (
    <div
      class={`flex items-center space-y-1 rounded-md shadow-md bg-primaryDark bg-opacity-50 ${
        props.rootClass || ''
      }`}
    >
      {props.children}
    </div>
  );
}
