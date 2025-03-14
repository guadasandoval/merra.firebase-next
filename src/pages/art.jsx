import React from 'react';
import getSection from 'src/actions/getSection';
import GroupedPosts from 'src/components/sections/GroupedPosts';
import { NextSeo } from 'next-seo';
import { ART } from 'src/services/foldersNames';

const Art = ({ posts = [] }) => {
  return (
    <>
      <NextSeo title='Maria Muchut' defaultTitle='Maria Muchut' />
      <GroupedPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getSection(ART);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Art;
