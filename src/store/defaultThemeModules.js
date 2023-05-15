import { createStore } from 'vuex'

export default createStore({
    state: {
        theme: {
            "Light": ["#F6F8FA", "#FFFFFF", "#212121", "#FFFFFF", "#4091FF"],
            "Night": ["#333333", "#3B3B3B", "#F2F2F2", "#212121", "#4091FF"],
            "高对比": ["#000000", "#121212", "#FFFFFF", "#000000", "#F38518"]
        }
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
})