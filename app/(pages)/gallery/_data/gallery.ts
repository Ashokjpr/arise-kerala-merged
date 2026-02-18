import { GalleryData } from '../_components/GalleryData';

export function getAllGalleries() {
  return GalleryData;
}

export function getGalleryBySlug(slug: string) {
  return GalleryData.find((gallery) => gallery.slug === slug) || null;
}