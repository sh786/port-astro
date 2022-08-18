import pittsburghImg from '@/img/pittsburgh.png';
import type { ListPageItemProps } from '@/core/components/ListPageItem';

export const films: ListPageItemProps[] = [
  {
    title: 'Pittsburgh',
    description:
      'Aerial shots from Point Park of Heinz Field and downtown Pittsburgh',
    meta: 'April, 2020',
    videoUrl: 'https://youtu.be/VbGUcpn2a8E',
    imagePath: pittsburghImg,
  },
];
