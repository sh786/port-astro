import { Show } from 'solid-js';

import ColumnCard from '@/core/components/ColumnCard';
import LinkIcon from '@/core/components/icons/LinkIcon';
import GithubIcon from '@/core/components/icons/GithubIcon';
import VideoIcon from './icons/VideoIcon';

export interface ListPageItemProps {
  title: string;
  description: string;
  meta: string;
  webUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  imagePath?: string;
}

export default function ListPageItem(props: ListPageItemProps) {
  return (
    <ColumnCard rootClass="h-36">
      <Show when={!!props.imagePath}>
        <img
          src={props.imagePath}
          alt={`${props.title} thumbnail`}
          class="w-56 h-36"
        />
      </Show>
      <div class="flex flex-col px-6 space-y-2">
        <h2 class="text-2xl text-accentLight">{props.title}</h2>
        <span class="text-md">{props.description}</span>
        <span class="text-sm">{props.meta}</span>
      </div>
      <div class="flex items-center space-x-5 ml-auto px-6">
        <Show when={!!props.webUrl}>
          <a href={props.webUrl} class="w-7 h-7 hover:text-accentDark">
            <LinkIcon />
          </a>
        </Show>
        <Show when={!!props.videoUrl}>
          <a href={props.videoUrl} class="w-7 h-7 hover:text-accentDark">
            <VideoIcon />
          </a>
        </Show>
        <Show when={!!props.githubUrl}>
          <a
            href={props.githubUrl}
            class="w-7 h-7 hover:fill-accentDark fill-white"
          >
            <GithubIcon />
          </a>
        </Show>
      </div>
    </ColumnCard>
  );
}
