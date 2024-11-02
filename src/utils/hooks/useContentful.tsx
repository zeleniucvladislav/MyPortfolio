import { createClient, EntryCollection, EntrySkeletonType } from "contentful";
import { useCallback, useEffect, useState, useMemo } from "react";

export const useContentful = (contentType: string) => {
  const instance = useMemo(
    () =>
      createClient({
        space: import.meta.env.VITE_SPACE ?? "",
        accessToken: import.meta.env.VITE_TOKEN ?? "",
      }),
    []
  );

  const [entries, setEntries] =
    useState<EntryCollection<EntrySkeletonType> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getEntries = useCallback(async () => {
    try {
      const entries = await instance.getEntries({
        content_type: contentType,
      });
      setEntries(entries as EntryCollection<EntrySkeletonType>);
    } catch {
      setError("Something went wrong ! Please come later.");
    }
  }, [contentType, instance]);

  useEffect(() => {
    getEntries();
  }, [getEntries]);

  return { entries, error };
};
