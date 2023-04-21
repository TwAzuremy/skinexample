<template>
  <nav class="sidebar">
    <h2 class="side-title">EXAMPLE</h2>
    <divider></divider>
    <div class="up">
      <router-link tag="router" to="/">
        <icon-button text="首页" class="bounce">
          <template v-slot:svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-home">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </template>
        </icon-button>
      </router-link>
      <router-link tag="router" to="/collect">
        <icon-button text="收藏" class="revolve">
          <template v-slot:svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-star">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
              </polygon>
            </svg>
          </template>
        </icon-button>
      </router-link>
    </div>
    <div class="down">
      <router-link tag="router" to="/settings">
        <icon-button text="设置" class="revolve">
          <template v-slot:svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-settings">
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
              </path>
            </svg>
          </template>
        </icon-button>
      </router-link>
    </div>
  </nav>
  <div class="views">
    <router-view />
  </div>
</template>

<script>
import divider from './components/divider.vue';
import iconButton from './components/iconButton.vue';

export default {
  components: {
    divider, iconButton
  }
}
</script>

<style lang="scss">
@import 'global.scss';

#app {
  @include cols();
}

.sidebar {
  @include rows();
  align-items: center;
  padding: 12px;
  min-width: 180px;
  box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.08);
  background-color: $panelBg;

  .divider {
    margin-bottom: 0;
  }

  .up {
    flex: 1;
    width: 100%;
  }

  .down {
    width: 100%;
  }

  .icon-button {
    margin-top: 8px;
  }

  .router-link-active .icon-button {
    color: $minorBg;

    &.bounce svg {
      animation: bounce .4s linear 1;
    }

    &.revolve svg {
      animation: revolve 1s ease-in-out 1;
    }

    @keyframes bounce {
      0% {
        transform: rotate(0) translateY(0);
      }

      40% {
        transform: rotate(30deg) translateY(-4px);
      }

      60% {
        transform: rotate(-30deg) translateY(-4px);
      }

      100% {
        transform: rotate(0) translateY(0);
      }
    }

    @keyframes revolve {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}

.views {
  margin-left: 12px;
}
</style>
