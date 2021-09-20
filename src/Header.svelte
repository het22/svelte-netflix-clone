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
  <ul class="menus">
    <li class="menu">
      <img class="icon" src="assets/icon_search.svg" alt="search" />
    </li>
    <li class="menu">
      <img class="icon" src="assets/icon_bell.svg" alt="noti" />
    </li>
    <li class="menu menu--user">
      <img class="user" src="assets/icon_user.svg" alt="user" />
      <img class="arrow" src="assets/arrow_down.svg" alt="arrow" />
    </li>
  </ul>
</header>

<style>
	header {
		position: fixed;
    z-index: 1;
		top: 0;
		padding: 0 42px;
    width: 100%;
		height: 66px;
		display: flex;
		align-items: center;
		background: linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0,0,0,0)
    );
    box-sizing: border-box;
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

  .menus {
    margin-left: auto;
    display: flex;
    align-items: center;
    list-style:none;
  }
  .menu {
    margin-left: 24px;
    cursor: pointer;
  }
  .menu--user {
    display: flex;
    align-items: center;
  }

  .icon {
    height: 18px;
    filter: invert(1);
  }
  .user {
    padding: 3px;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 3px;
    box-sizing: border-box;
  }
  .arrow {
    margin-left: 12px;
    width: 9px;
    filter: invert(1);
    transition: 0.2s transform;
  }
  .menu--user:hover .arrow {
    transform: rotate(180deg)
  }
</style>