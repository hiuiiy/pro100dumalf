<template>
<header class="uk-box-shadow-small" style="background-color: white">
        <nav
          class="uk-navbar uk-background-primary uk-light"
          id="navbar"
          data-uk-navbar
        >
          <div class="uk-navbar-left uk-width-small uk-visible@s">
            <a
              class="uk-navbar-item uk-logo "
              href="#"
              ><img
                src="https://via.placeholder.com/2000x1000?text=%D0%9E%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%BF%D1%80%D0%B8%D0%BE"
            /></a>
          </div>

          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li class="uk-active uk-visible@l">
                <router-link to="/"><a>Главная</a></router-link>
              </li>
              <li ><router-link to="/list">
                <a class="uk-button-default uk-button-small" href="#"
                  ><span class="uk-visible@s ">СПИСОК ОТДЕЛЕНИЙ</span
                  ><span class="uk-hidden@s">ОТДЕЛЕНИЯ</span></a
                >
  </router-link></li>
              <li><router-link to="/search">
                <a class="uk-button-default uk-button-small" href="/index2.html"
                  ><span class="uk-visible@s">ПОИСК ПАЦИЕНТОВ</span
                  ><span class="uk-hidden@s">ПАЦИЕНТЫ</span></a
                  ></router-link>
              </li>
            </ul>
            <div class="uk-navbar-item">
              <a
                class="uk-navbar-toggle uk-hidden@m"
                data-uk-toggle
                data-uk-navbar-toggle-icon
                href="#offcanvas-nav"
              ></a>
              <a href="#" class="uk-button uk-button-small uk-button- uk-visible@m"
                ><span data-uk-icon="sign-in"></span>Аккаукнт</a
              >
            </div>
          </div>
        </nav>
    </header>



<!-- БОКОВОЕ МЕНЮ -->
    <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
      <div
        class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide"
      >
        <button
          class="uk-offcanvas-close uk-close uk-icon"
          type="button"
          data-uk-close
        ></button>
        <ul class="uk-nav uk-nav-default uk-text-uppercase">
          <li class="uk-parent">
            <a href="#" class="uk-nav-header">Главная</a>
            <ul class="uk-nav-sub">
              <li><a href="#">Список отделений</a></li>
              <li><a href="#">Поиск пациента</a></li>
            </ul>
          </li>
          <li class="uk-nav-header">АККАУНТ</li>
          <li>
            <a href="#js-options"
              ><span
                class="uk-margin-small-right uk-icon"
                data-uk-icon="icon: table"
              ></span>
              настройки</a
            >
          </li>
          <li>
            <a href="#"
              ><span
                class="uk-margin-small-right uk-icon"
                data-uk-icon="icon: thumbnails"
              ></span>
              Справка</a
            >
          </li>
          <li class="uk-nav-divider"></li>
          <li>
            <a href="#"
              ><span
                class="uk-margin-small-right uk-icon"
                data-uk-icon="icon: trash"
              ></span>
              Выход</a
            >
          </li>
        </ul>

        <p class="uk-text-meta">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <!-- / -->
</template>

<style scoped>

</style>