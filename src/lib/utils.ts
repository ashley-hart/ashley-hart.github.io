import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

/** Placeholder entries are visible while developing and hidden in production. */
export const showPlaceholders = import.meta.env.DEV;

type WithPlaceholder = { data: { placeholder?: boolean } };

export function visible<T extends WithPlaceholder>(entries: T[]): T[] {
  return showPlaceholders ? entries : entries.filter((e) => !e.data.placeholder);
}

/** Load a data collection with placeholder filtering applied. */
export async function getVisible<C extends CollectionKey>(name: C) {
  const entries = (await getCollection(name)) as CollectionEntry<C>[];
  return visible(entries as unknown as WithPlaceholder[]) as unknown as CollectionEntry<C>[];
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => showPlaceholders || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications() {
  const pubs = await getVisible('publications');
  return pubs.sort((a, b) => b.data.year - a.data.year);
}

export function byYearDesc<T extends { data: { year: string | number } }>(a: T, b: T) {
  return String(b.data.year).localeCompare(String(a.data.year));
}

export function byOrder<T extends { data: { order: number } }>(a: T, b: T) {
  return a.data.order - b.data.order;
}

export function formatDate(date: Date, style: 'long' | 'month' = 'long') {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    ...(style === 'long' ? { day: 'numeric' } : {}),
    timeZone: 'UTC',
  });
}

/** "2025-06" -> "Jun 2025" */
export function formatMonth(ym: string) {
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, (m || 1) - 1, 1)).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function readingTime(markdown = '') {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 225))} min read`;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escape text, then turn **bold** into <strong>. Used for author lists. */
export function inlineBold(text: string) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
