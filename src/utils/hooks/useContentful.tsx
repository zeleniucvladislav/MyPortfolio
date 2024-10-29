import { createClient, EntryCollection, EntrySkeletonType } from "contentful";
import { useCallback, useEffect, useState, useMemo } from "react";

export const useContentful = (contentType: string) => {
  const instance = useMemo(
    () =>
      createClient({
        space: process.env.REACT_APP_SPACE ?? "",
        accessToken: process.env.REACT_APP_TOKEN ?? "",
      }),
    []
  );
  const [entries, setEntries] =
    useState<EntryCollection<EntrySkeletonType> | null>(null);

  const getEntries = useCallback(async () => {
    const entries = await instance.getEntries({
      content_type: contentType,
    });

    setEntries(entries as EntryCollection<EntrySkeletonType>);
  }, [contentType, instance]);

  useEffect(() => {
    getEntries();
  }, [getEntries]);

  return { entries };
};
