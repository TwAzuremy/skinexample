import { createStore } from 'vuex'

export default createStore({
    state: {
        skinData: [
            {
                'skin': require('@/assets/skin/azuremy.png'),
                'title': 'Skin 1',
                'model': 'Alex',
                'author': 'Azuremy',
                'uploadTime': '2023-04-26 14:36:25'
            },
            {
                'skin': require('@/assets/skin/azuremy1.png'),
                'title': 'Skin 2',
                'model': 'Alex',
                'author': 'Azuremy',
                'uploadTime': '2023-04-26 14:36:25'
            },
            {
                'skin': require('@/assets/skin/azuremy2.png'),
                'title': 'Skin 3',
                'model': 'Alex',
                'author': 'Azuremy',
                'uploadTime': '2023-04-26 14:36:25'
            },
            {
                'skin': require('@/assets/skin/azuremy3.png'),
                'title': 'Skin 4',
                'model': 'Steve',
                'author': 'Azuremy',
                'uploadTime': '2023-04-26 14:36:25'
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