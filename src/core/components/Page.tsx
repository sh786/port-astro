import { ParentProps, For, Show } from 'solid-js';
import PageItem from './PageItem';
import type { PageItemProps } from './PageItem';

interface PageProps extends ParentProps {
  title: string;
  subtitle: string;
  tags?: string[];
  items?: PageItemProps[];
}

export default function ListPage(props: PageProps) {
  return (
    <div class="flex flex-col m-auto mt-6 px-4 space-y-3 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <h1 class="text-5xl">{props.title}</h1>
      <span class="text-xl tracking-wide">{props.subtitle}</span>
      <Show when={!!props.tags}>
        <div class="flex space-x-2">
          <For each={props.tags}>
            {(tag) => (
              <span class="bg-accent text-white px-3 rounded-3xl">{tag}</span>
            )}
          </For>
        </div>
      </Show>
      <hr class="opacity-10" />
      <Show when={!!props.items}>
        <div class="flex flex-col space-y-8">
          <For each={props.items}>
            {({
              title,
              description,
              meta,
              webUrl,
              githubUrl,
              videoUrl,
              imagePath,
              ctaPath,
              ctaText,
            }) => (
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
              />
            )}
          </For>
        </div>
      </Show>
      {props.children}
    </div>
  );
}
