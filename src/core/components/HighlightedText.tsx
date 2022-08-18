import { For } from 'solid-js';

interface HighlightedTextProps {
  text: string;
  char: string;
}

export default function HighlightedText(props: HighlightedTextProps) {
  return (
    <p>
      {
        <For each={props.text.split('')}>
          {(letter) =>
            letter === props.char ? (
              <span class="text-accent">{letter}</span>
            ) : (
              letter
            )
          }
        </For>
      }
    </p>
  );
}
