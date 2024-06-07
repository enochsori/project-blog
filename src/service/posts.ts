import path from 'path';
import { Post } from './types';
import { readFile } from 'fs/promises';

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return (
    readFile(filePath, 'utf-8') //
      .then<Post[]>(JSON.parse)
      // sort json parsed post data depending on the date
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  // return only featured true posts
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  // return only featured true posts
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPost(path: string): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.path === path));
}
