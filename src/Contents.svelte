<script>
  import * as request from "../scripts/request";
  import List from "./List.svelte";

  const contents = [
    {
      title: "지금 뜨는 영화",
      fetch: () => request.movies("now_playing")
    },
    {
      title: "높은 평가를 받은 영화",
      fetch: () => request.movies("top_rated")
    },
    {
      title: "오늘 방영 예정",
      fetch: () => request.tvs("airing_today")
    },
    {
      title: "인기 TV 프로그램",
      fetch: () => request.tvs("popular")
    },
    {
      title: "평점이 높은 TV 프로그램",
      fetch: () => request.tvs("top_rated")
    }
  ]
</script>

<div class="contents">
  {#each contents as content}
    {#await content.fetch() then { results }}
      <List title={content.title} items={results}></List>
    {/await}
  {/each}
</div>

<style>
  .contents {
    z-index: 1;
    margin-top: -150px;
  }
</style>