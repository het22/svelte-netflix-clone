<script>
  export let title;
  export let items = [];
</script>

<div class="list">
  <div class="list__title">{title}</div>
  <div class="items">
    {#each items as item}
      <div class="item">
      </div>
    {/each}
  </div>
</div>

<style>
  .list {
    margin-bottom: 30px;
  }
  .list__title {
    padding: 0 42px;
  }
  .items {
    margin-top: 12px;
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
    width: 240px;
    height: 120px;
    background-color: #444;
    border-radius: 6px;
  }
  .item:last-of-type {
    margin-right: 0;
  }
</style>
