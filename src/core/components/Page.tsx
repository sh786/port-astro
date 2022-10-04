import { ParentProps, For, Show } from 'solid-js';
import { Motion } from '@motionone/solid';
import PageItem from './PageItem';
import type { PageItemProps } from './PageItem';
import Uses from '@/components/Uses';

interface PageProps extends ParentProps {
  title: string;
  subtitle: string;
  tags?: string[];
  items?: PageItemProps[];
}

export default function ListPage(props: PageProps) {
  return (
    <div class="flex flex-col m-auto mt-6 px-4 space-y-3 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <Motion.h1
        class="text-5xl"
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: 0,
          transition: {
            easing: 'ease-in-out',
            duration: 0.8,
          },
        }}
      >
        {props.title}
      </Motion.h1>
      <Motion.span
        class="text-xl tracking-wide"
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: 0,
          transition: {
            easing: 'ease-in-out',
            duration: 0.8,
          },
        }}
      >
        {props.subtitle}
      </Motion.span>
      <Show when={!!props.tags}>
        <Motion.div
          class="flex space-x-2"
          initial={{
            x: '-100vw',
          }}
          animate={{
            x: 0,
            transition: {
              easing: 'ease-in-out',
              duration: 0.8,
            },
          }}
        >
          <For each={props.tags}>
            {(tag) => (
              <span class="bg-accent text-white px-3 rounded-3xl">{tag}</span>
            )}
          </For>
        </Motion.div>
      </Show>
      <Motion.hr
        class="opacity-10"
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: 0,
          transition: {
            easing: 'ease-in-out',
            duration: 0.8,
          },
        }}
      />
      <Show when={!!props.items}>
        <div class="flex flex-col space-y-8">
          <For each={props.items}>
            {(
              {
                title,
                description,
                meta,
                webUrl,
                githubUrl,
                videoUrl,
                imagePath,
                ctaPath,
                ctaText,
              },
              index
            ) => (
              <PageItem
                title={title}
                description={description}
                meta={meta}
                webUrl={webUrl}
                githubUrl={githubUrl}
                videoUrl={videoUrl}
                imagePath={imagePath}
                ctaPath={ctaPath}
                ctaText={ctaText}
                order={index()}
              />
            )}
          </For>
        </div>
      </Show>
      <Show when={props.title === 'uses'}>
        <Uses />
      </Show>
      {props.children}
    </div>
  );
}
