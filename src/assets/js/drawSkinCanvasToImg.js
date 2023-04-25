/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {Map} skinList 
 */
export function drawSkinCanvasToImg(canvas, skinList) {
    draw()

    async function draw() {
        for (let i = 0; i < skinList.length; i++) {
            await task(i)
        }

        return skinList
    }

    function task(task) {
        return new Promise(resolve => {
            canvas.dataset.skin = skinList[task].skin
            canvas.dataset.model = skinList[task].model === 'Alex' ? 'slim' : 'fat'
            skinRender.skin3d(canvas)

            setTimeout(() => {
                skinList[task].imgURL = canvas.toDataURL('image/png')
                resolve()
            }, 100);
        })
    }
}