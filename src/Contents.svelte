<script>
  import * as request from "../scripts/request";
  import List from "./List.svelte";
</script>

<div class="contents">
  {#await request.movies("now_playing") then { results }}
    <List title="지금 뜨는 영화" items={results}></List>
  {/await}
  {#await request.movies("top_rated") then { results }}
    <List title="높은 평가를 받은 영화" items={results}></List>
  {/await}
  {#await request.tvs("airing_today") then { results }}
    <List title="오늘 방영 예정" items={results}></List>
  {/await}
  {#await request.tvs("popular") then { results }}
    <List title="인기 TV 프로그램" items={results}></List>
  {/await}
  {#await request.tvs("top_rated") then { results }}
    <List title="평점이 높은 TV 프로그램" items={results}></List>
  {/await}
</div>

<style>
  .contents {
    z-index: 1;
    margin-top: -150px;
  }
</style>