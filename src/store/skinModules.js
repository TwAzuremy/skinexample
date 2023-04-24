import { createStore } from 'vuex'

export default createStore({
    state: {
        skinData: [
            {
                'skin': require('@/assets/skin/azuremy.png'),
                'title': 'Skin 1',
                'model': 'Alex'
            },
            {
                'skin': require('@/assets/skin/azuremy1.png'),
                'title': 'Skin 2',
                'model': 'Alex'
            },
            {
                'skin': require('@/assets/skin/azuremy2.png'),
                'title': 'Skin 3',
                'model': 'Alex'
            },
            {
                'skin': require('@/assets/skin/azuremy3.png'),
                'title': 'Skin 4',
                'model': 'Steve'
            },
        ]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
})