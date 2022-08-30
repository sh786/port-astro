import { Show } from 'solid-js';

import Card from '@/core/components/Card';
import LinkIcon from '@/core/components/icons/LinkIcon';
import GithubIcon from '@/core/components/icons/GithubIcon';
import VideoIcon from './icons/VideoIcon';

export interface PageItemProps {
  title: string;
  description: string;
  meta: string;
  webUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  imagePath?: string;
  ctaPath?: string;
  ctaText?: string;
}

export default function PageItem(props: PageItemProps) {
  const hasLinks = () =>
    !!props.webUrl || !!props.githubUrl || !!props.videoUrl;

  return (
    <Card>
      <Show when={!!props.imagePath}>
        <img
          src={props.imagePath}
          alt={`${props.title} thumbnail`}
          class="w-56 h-36"
        />
      </Show>
      <div class="flex flex-col flex-1 items-start px-6 space-y-2">
        <h2 class="text-xl md:text-2xl text-accentLight">{props.title}</h2>
        <span class="text-xs md:text-base">{props.description}</span>
        <span class="text-xs md:text-base">{props.meta}</span>
      </div>
      <Show when={hasLinks()}>
        <div class="flex items-center space-x-3 md:space-x-5 ml-auto px-2 md:px-6">
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
      </Show>
      <Show when={!!props.ctaPath}>
        <a
          href={props.ctaPath}
          class="py-1.5 px-3 mr-2 bg-accentLight text-white hover:bg-accent rounded-md self-end"
        >
          {props.ctaText || 'Check it out'}
        </a>
      </Show>
    </Card>
  );
}
