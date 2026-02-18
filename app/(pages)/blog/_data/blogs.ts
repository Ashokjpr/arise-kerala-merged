import { blogData } from '../_components/blogData';

export function getAllBlogs() {
  return blogData;
}

export function getBlogBySlug(slug: string) {
  return blogData.find((blog) => blog.slug === slug) || null;
}
