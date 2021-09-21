<script>
  export let title;
  export let items = [];
</script>

<div class="list">
  <div class="list__title">{title}</div>
  <div class="items">
    {#each items as item(item.id)}
      <div class="item">
        <img
          src={
            "https://image.tmdb.org/t/p/w500/" +
            (item.backdrop_path || item.poster_path)
          }
          alt={item.title}
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .list {
    margin-bottom: 60px;
  }
  .list__title {
    padding: 0 42px;
    font-size: 24px;
    font-weight: bold;
  }
  .items {
    margin-top: 18px;
    padding: 0 42px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
  .items::-webkit-scrollbar {
    display: none;
  }
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
