<script>
import { onMount } from "svelte";

  import * as request from "../scripts/request";
  import List from "./List.svelte";

  let populars = [];
  $: console.log(populars);

  onMount(() => {
    request.popularMovies().then(({ results }) => {
      populars = results;
    })
  });
</script>

<div class="contents">
  <List
    title="지금 뜨는 콘텐츠"
    items={populars}
  ></List>
</div>

<style>
  .contents {
    z-index: 1;
    margin-top: -150px;
  }
</style>