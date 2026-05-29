import { useEffect } from "react";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Ofidismo Educacional`;

    const existing = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (existing) {
      existing.content = description;
    }
  }, [description, title]);
}
