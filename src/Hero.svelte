<div class="hero">
  <video
    poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    autoplay
    muted
  />
  <div class="hero__info">
    <div class="hero__info__title">
      Caminandes Llamigos
    </div>
    <div class="hero__info__caption">
      월요일 새로운 에피소드 공개
    </div>
    <div class="hero__info__description">
      Caminandes is an independently produced series of computer animated short films created by Pablo Vazquez, produced and released by the Blender Foundation.
    </div>
  </div>
</div>

<style>
  .hero {
    position: relative;
    height: 660px;
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

  .hero__info {
    position: absolute;
    left: 6%;
    bottom: 36%;
    width: 420px;
  }
  .hero__info__title {
    font-size: 60px;
    font-weight: bold;
    text-shadow:
      -1px -1px 0 black,
      1px -1px 0 black,
      -1px 1px 0 black,
      1px 1px 0 black;
  }
  .hero__info__caption {
    margin-top: 18px;
    font-weight: bold;
  }
  .hero__info__description {
    margin-top: 12px;
  }
</style>