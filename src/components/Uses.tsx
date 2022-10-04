import { For } from 'solid-js';
import { Motion } from '@motionone/solid';
import HighlightedText from '@/core/components/HighlightedText';
import { uses } from '@/data/uses';

export default function Uses() {
  return (
    <div class="flex flex-col space-y-4">
      <For each={uses}>
        {({ title, leftColItems, rightColItems }, index) => (
          <Motion.div
            class="flex flex-col space-y-1"
            initial={{
              x: '100vw',
            }}
            animate={{
              x: 0,
            }}
            transition={{
              easing: 'ease-in-out',
              delay: 0.1 * index(),
              duration: 0.8,
            }}
          >
            <h2 class="text-accent underline text-xl tracking-wide">{title}</h2>
            <div class="flex space-x-10">
              <div class="flex flex-col space-y-1">
                <For each={leftColItems}>
                  {(item) => <HighlightedText text={item} char="/" />}
                </For>
              </div>
              <div class="flex flex-col space-y-1">
                <For each={rightColItems}>
                  {(item) => <HighlightedText text={item} char="/" />}
                </For>
              </div>
            </div>
          </Motion.div>
        )}
      </For>
    </div>
  );
}
