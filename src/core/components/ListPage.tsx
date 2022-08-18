import { ParentProps, For, Show } from 'solid-js';
import ListPageItem from './ListPageItem';
import type { ListPageItemProps } from './ListPageItem';

interface ListPageProps extends ParentProps {
  title: string;
  subtitle: string;
  items?: ListPageItemProps[];
}

export default function ListPage(props: ListPageProps) {
  return (
    <div class="flex flex-col m-auto mt-6 space-y-3 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <h1 class="text-5xl">{props.title}</h1>
      <span class="text-xl tracking-wide">{props.subtitle}</span>
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
            }) => (
              <ListPageItem
                title={title}
                description={description}
                meta={meta}
                webUrl={webUrl}
                githubUrl={githubUrl}
                videoUrl={videoUrl}
                imagePath={imagePath}
              />
            )}
          </For>
        </div>
      </Show>
      {props.children}
    </div>
  );
}
