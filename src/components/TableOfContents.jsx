import { useEffect, useState } from 'react';

const BAR_WIDTH = {
  1: 'w-5',
  2: 'w-3.5',
  3: 'w-2.5',
};

export default function TableOfContents({ items, label }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.1, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items.map((item) => item.id).join('|')]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);
  };

  return (
    <nav
      aria-label={label}
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 xl:flex xl:flex-col xl:items-end xl:gap-2.5"
    >
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            aria-current={isActive ? 'location' : undefined}
            className="group flex items-center justify-end gap-3 py-0.5"
          >
            <span
              className={`max-w-[11rem] truncate text-right text-xs leading-tight opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 ${
                isActive ? 'text-ink' : 'text-caption'
              }`}
            >
              {item.title}
            </span>
            <span
              aria-hidden="true"
              className={`block h-0.5 shrink-0 rounded-full transition-all duration-200 ${BAR_WIDTH[item.level] ?? BAR_WIDTH[2]} ${
                isActive
                  ? 'bg-ink scale-x-110'
                  : 'bg-line group-hover:bg-caption group-focus-visible:bg-caption'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
