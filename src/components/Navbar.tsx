import { For } from 'solid-js';

type NavItem = {
  text: string;
  path: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    text: 'works',
    path: '/works',
  },
  {
    text: 'blog',
    path: '/blog',
  },
  {
    text: 'film',
    path: '/film',
  },
  {
    text: 'uses',
    path: '/uses',
  },
];

interface NavbarProps {
  path: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <>
      <div class="w-full flex items-center p-3 md:px-5 md:py-3">
        <div>
          <a href="/">
            <span class="max-h text-3xl md:text-4xl text-white">
              s<span class="text-accent">/</span>h
            </span>
          </a>
        </div>
        <div class="ml-auto">
          <ul class="flex space-x-4 md:space-x-12 text-xl md:text-2xl text-white">
            <For each={NAV_ITEMS}>
              {({ text, path }) => (
                <a
                  href={path}
                  class={`${
                    path === props.path ? 'text-accent' : ''
                  } hover:text-accentDark`}
                >
                  <li>{text}</li>
                </a>
              )}
            </For>
          </ul>
        </div>
      </div>
    </>
  );
}
