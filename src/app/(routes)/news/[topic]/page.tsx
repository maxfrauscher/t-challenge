import Title from '@/app/_components/forms/Title';
import React from 'react';

export default function TopicPage({ params }: any) {
  return <Title> {params.topic}</Title>;
}
