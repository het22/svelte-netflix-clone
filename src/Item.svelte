<script>
  export let item;
</script>

<div class="item">
  <img
    src={
      "https://image.tmdb.org/t/p/w500/" +
      (item.backdrop_path || item.poster_path)
    }
    alt={item.title}
  />
</div>

<style>
  .item {
    margin-right: 6px;
    flex: 0 0 auto;
    width: 300px;
    height: 150px;
    background-color: #444;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
  }
  .item:last-of-type {
    margin-right: 0;
  }
  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
