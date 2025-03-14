import React from 'react';
import getSection from 'src/actions/getSection';
import GroupedPosts from 'src/components/sections/GroupedPosts';
import { NextSeo } from 'next-seo';
import { VIDEO } from 'src/services/foldersNames';

const Video = ({ posts = [] }) => {
  return (
    <>
      <NextSeo title='Maria Muchut' defaultTitle='Maria Muchut' />
      <GroupedPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getSection(VIDEO);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Video;
