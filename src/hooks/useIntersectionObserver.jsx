import { useEffect, useState } from 'react';

export default function useIntersectionObserver(
  elementRef,
  {
    threshold = 1.0,
    root = null,
    rootMargin = '150px',
    freezeOnceVisible = false,
  },
) {
  const [entry, setEntry] = useState();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([updatedEntry]) => {
    setEntry(updatedEntry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);
  }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}
