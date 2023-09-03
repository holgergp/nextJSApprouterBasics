"use client";

import { getNews } from "@/shared/server";
import { News } from "@/app/types";
import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      setNews(data);
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2">
        Neuigkeiten
      </h2>
    
      <ol>
        {news.map((p) => {
          return (
            <li key={p.id} className="flex">
              <div className="flex-initial w-6 ">{p.id}</div>
              <div className="flex-initial">{p.newsShort}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
