import React from 'react';
import getSection from 'src/actions/getSection';
import GroupedPosts from 'src/components/sections/GroupedPosts';
import { NextSeo } from 'next-seo';
import { WRITING } from 'src/services/foldersNames';

const Writing = ({ posts = [] }) => {
  return (
    <>
      <NextSeo title='Maria Muchut' defaultTitle='Maria Muchut' />
      <GroupedPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getSection(WRITING);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Writing;
