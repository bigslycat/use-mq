/* @flow */

import { useState, useEffect } from 'react';

import { getMQ } from './getMQ';

export function useMQ(query: string): boolean {
  const [matches, setMatches]: [boolean, *] = useState(false);

  useEffect(() => {
    const mediaQueryList = getMQ(query);

    const listener = mediaQueryListEvent =>
      setMatches(mediaQueryListEvent.matches);

    mediaQueryList.addListener(listener);

    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
}
