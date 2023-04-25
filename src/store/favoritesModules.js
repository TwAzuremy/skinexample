import { createStore } from 'vuex'

export default createStore({
    state: {
        skinData: [
            {
                'skin': require('@/assets/skin/azuremy.png'),
                'title': 'Skin 1',
                'model': 'Alex',
                'alias': 'MySkin 1'
            },
            {
                'skin': require('@/assets/skin/azuremy1.png'),
                'title': 'Skin 2',
                'model': 'Alex',
                'alias': 'MySkin 2'
            },
            {
                'skin': require('@/assets/skin/azuremy2.png'),
                'title': 'Skin 3',
                'model': 'Alex',
                'alias': 'MySkin 3'
            },
            {
                'skin': require('@/assets/skin/azuremy3.png'),
                'title': 'Skin 4',
                'model': 'Steve',
                'alias': 'MySkin 4'
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