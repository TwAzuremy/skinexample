import {createStore} from 'vuex'
import skinModules from './skinModules'
import favoritesModules from './favoritesModules'
import defaultThemeModules from './defaultThemeModules'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        skin: skinModules,
        favorite: favoritesModules,
        theme: defaultThemeModules
    }
})
