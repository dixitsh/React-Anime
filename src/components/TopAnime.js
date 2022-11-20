import React from "react";
import "../styles.css";
function TopAnime({ topAnime }) {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            <strong>{anime.title}</strong>
            <br />
            <i>{anime.rating}</i>
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default TopAnime;
