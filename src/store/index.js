import {createStore} from 'vuex'
import skinModules from './skinModules'
import favoritesModules from './favoritesModules'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        skin: skinModules,
        favorite: favoritesModules
    }
})
