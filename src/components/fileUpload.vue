<template>
    <div class="file-upload">
        <input-box ref="fileTextEl" :hasClear="false" :readOnly="true" ph="点击上传" :defaultValue="fileName">
            <template v-slot:prefix-svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-file">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
            </template>
        </input-box>
        <input ref="fileEl" type="file" class="file" @change="handleFileChange">
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import InputBox from './inputBox.vue';

export default {
    name: 'FileUpload',
    components: {
        InputBox
    },
    props: {
        types: {
            type: Array,
            default: []
        },
        uploadFunc: {
            type: Function,
            default: null
        }
    },
    setup(props) {
        const fileEl = ref(null)
        const fileTextEl = ref(null)
        const fileName = ref('')

        const openFile = () => {
            fileEl.value.click()
        }

        const handleFileChange = (event) => {
            const file = event.target.files[0]
            fileName.value = file ? file.name : ''
            
            const extension = fileName.value.split('.').pop().toLowerCase()

            if (props.types.indexOf(extension) !== -1 || props.types.length === 0) {
                props.uploadFunc?.()
            } else {
                fileName.value = ''
            }
        }

        const getFiles = () => {
            return fileEl.value.files[0]
        }

        const getFileURL = () => {
            return URL.createObjectURL(fileEl.value.files[0])
        }

        const clear = () => {
            fileTextEl.value.clear()
        }

        onMounted(() => {
            fileTextEl.value.$el.addEventListener('click', openFile)
        })

        return {
            fileEl, fileTextEl, fileName, handleFileChange, getFiles, getFileURL, clear
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.file-upload {
    >.file {
        display: none;
    }

    .input-box input {
        cursor: pointer;
    }
}
</style>