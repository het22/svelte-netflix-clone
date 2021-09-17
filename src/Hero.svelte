<div class="hero">
  <video
    poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    autoplay
    muted
  />
</div>

<style>
  .hero {
    height: 70vh;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left 60%,
      left bottom,
      from(rgba(0,0,0,1)),
      to(rgba(0,0,0,0))
    );
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>