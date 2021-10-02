<script>
  import Item from "./Item.svelte";
  export let title;
  export let items = [];
</script>

<div class="list">
  <div class="list__title">{title}</div>
  <div class="items">
    {#each items as item(item.id)}
      <Item item={item} />
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
</style>
