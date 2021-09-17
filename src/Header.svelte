<header>
  <a class="logo" href="/">
    <img src="assets/logo.png" alt="logo" />
  </a>
  <ul class="nav-tabs">
    <li class="nav-tab nav-tab--current">
      <a href="/">홈</a>
    </li>
    <li class="nav-tab">
      <a href="/">TV 프로그램</a>
    </li>
    <li class="nav-tab">
      <a href="/">영화</a>
    </li>
    <li class="nav-tab">
      <a href="/">NEW! 요즘 대세 콘텐츠</a>
    </li>
    <li class="nav-tab">
      <a href="/">내가 찜한 콘텐츠</a>
    </li>
  </ul>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		padding: 0 42px;
		height: 66px;
		display: flex;
		align-items: center;
		color: white;
		background-color: transparent;
	}

	.logo {
		margin-right: 6px;
		height: 42%;
	}
	.logo img {
		margin-top: 3px;
		height: 100%;
	}

	.nav-tabs {
		display: flex;
		list-style:none;
	}
	.nav-tab {
		margin-left: 18px;
	}
	.nav-tab a {
		font-size: 10px;
		font-weight: 300;
		color: #ccc;
		text-decoration: none;
		transition: 0.2s color;
	}
	.nav-tab a:hover {
		color: #999;
	}
	.nav-tab--current a {
		font-weight: bold;
		color: white;
		pointer-events: none;
	}
</style>