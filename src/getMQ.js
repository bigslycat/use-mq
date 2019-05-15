/* @flow */

const mediaQueryListsCache: { [query: string]: MediaQueryList } = {};

export function getMQ(query: string): MediaQueryList {
  if (!mediaQueryListsCache[query]) {
    mediaQueryListsCache[query] = window.matchMedia(query);
  }

  return mediaQueryListsCache[query];
}
