(() => {
    class SkinRender {
        constructor() {
            this.TAU = 2 * Math.PI;
            this.EPSILON = 1e-3;

            this.skinLayout = [
                {
                    head: [
                        {
                            l: { x: 16, y: 8, w: 8, h: 8 },
                            r: { x: 0, y: 8, w: 8, h: 8 },
                            u: { x: 8, y: 0, w: 8, h: 8 },
                            d: { x: 16, y: 7, w: 8, h: -8 },
                            f: { x: 8, y: 8, w: 8, h: 8 },
                            b: { x: 24, y: 8, w: 8, h: 8 },
                        },
                        {
                            l: { x: 48, y: 8, w: 8, h: 8 },
                            r: { x: 32, y: 8, w: 8, h: 8 },
                            u: { x: 40, y: 0, w: 8, h: 8 },
                            d: { x: 48, y: 7, w: 8, h: -8 },
                            f: { x: 40, y: 8, w: 8, h: 8 },
                            b: { x: 56, y: 8, w: 8, h: 8 },
                        },
                    ],
                    torso: [
                        {
                            l: { x: 28, y: 20, w: 4, h: 12 },
                            r: { x: 16, y: 20, w: 4, h: 12 },
                            u: { x: 20, y: 16, w: 8, h: 4 },
                            d: { x: 28, y: 19, w: 8, h: -4 },
                            f: { x: 20, y: 20, w: 8, h: 12 },
                            b: { x: 32, y: 20, w: 8, h: 12 },
                        },
                    ],
                    armR: [
                        {
                            l: { x: 48, y: 20, w: 4, h: 12 },
                            r: { x: 40, y: 20, w: 4, h: 12 },
                            u: { x: 44, y: 16, w: 4, h: 4 },
                            d: { x: 48, y: 19, w: 4, h: -4 },
                            f: { x: 44, y: 20, w: 4, h: 12 },
                            b: { x: 52, y: 20, w: 4, h: 12 },
                        },
                    ],
                    armRS: [
                        {
                            l: { x: 47, y: 20, w: 4, h: 12 },
                            r: { x: 40, y: 20, w: 4, h: 12 },
                            u: { x: 44, y: 16, w: 3, h: 4 },
                            d: { x: 47, y: 19, w: 3, h: -4 },
                            f: { x: 44, y: 20, w: 3, h: 12 },
                            b: { x: 51, y: 20, w: 3, h: 12 },
                        },
                    ],
                    armL: [
                        {
                            l: { x: 43, y: 20, w: -4, h: 12 },
                            r: { x: 51, y: 20, w: -4, h: 12 },
                            u: { x: 47, y: 16, w: -4, h: 4 },
                            d: { x: 51, y: 19, w: -4, h: -4 },
                            f: { x: 47, y: 20, w: -4, h: 12 },
                            b: { x: 55, y: 20, w: -4, h: 12 },
                        },
                    ],
                    armLS: [
                        {
                            l: { x: 43, y: 20, w: -4, h: 12 },
                            r: { x: 50, y: 20, w: -4, h: 12 },
                            u: { x: 46, y: 16, w: -3, h: 4 },
                            d: { x: 49, y: 19, w: -3, h: -4 },
                            f: { x: 46, y: 20, w: -3, h: 12 },
                            b: { x: 53, y: 20, w: -3, h: 12 },
                        },
                    ],
                    legR: [
                        {
                            l: { x: 8, y: 20, w: 4, h: 12 },
                            r: { x: 0, y: 20, w: 4, h: 12 },
                            u: { x: 4, y: 16, w: 4, h: 4 },
                            d: { x: 8, y: 19, w: 4, h: -4 },
                            f: { x: 4, y: 20, w: 4, h: 12 },
                            b: { x: 12, y: 20, w: 4, h: 12 },
                        },
                    ],
                    legL: [
                        {
                            l: { x: 3, y: 20, w: -4, h: 12 },
                            r: { x: 11, y: 20, w: -4, h: 12 },
                            u: { x: 7, y: 16, w: -4, h: 4 },
                            d: { x: 11, y: 19, w: -4, h: -4 },
                            f: { x: 7, y: 20, w: -4, h: 12 },
                            b: { x: 15, y: 20, w: -4, h: 12 },
                        },
                    ],
                },
                {
                    head: [
                        {
                            l: { x: 16, y: 8, w: 8, h: 8 },
                            r: { x: 0, y: 8, w: 8, h: 8 },
                            u: { x: 8, y: 0, w: 8, h: 8 },
                            d: { x: 16, y: 7, w: 8, h: -8 },
                            f: { x: 8, y: 8, w: 8, h: 8 },
                            b: { x: 24, y: 8, w: 8, h: 8 },
                        },
                        {
                            l: { x: 48, y: 8, w: 8, h: 8 },
                            r: { x: 32, y: 8, w: 8, h: 8 },
                            u: { x: 40, y: 0, w: 8, h: 8 },
                            d: { x: 48, y: 7, w: 8, h: -8 },
                            f: { x: 40, y: 8, w: 8, h: 8 },
                            b: { x: 56, y: 8, w: 8, h: 8 },
                        },
                    ],
                    torso: [
                        {
                            l: { x: 28, y: 20, w: 4, h: 12 },
                            r: { x: 16, y: 20, w: 4, h: 12 },
                            u: { x: 20, y: 16, w: 8, h: 4 },
                            d: { x: 28, y: 19, w: 8, h: -4 },
                            f: { x: 20, y: 20, w: 8, h: 12 },
                            b: { x: 32, y: 20, w: 8, h: 12 },
                        },
                        {
                            l: { x: 28, y: 36, w: 4, h: 12 },
                            r: { x: 16, y: 36, w: 4, h: 12 },
                            u: { x: 20, y: 32, w: 8, h: 4 },
                            d: { x: 28, y: 35, w: 8, h: -4 },
                            f: { x: 20, y: 36, w: 8, h: 12 },
                            b: { x: 32, y: 36, w: 8, h: 12 },
                        },
                    ],
                    armR: [
                        {
                            l: { x: 48, y: 20, w: 4, h: 12 },
                            r: { x: 40, y: 20, w: 4, h: 12 },
                            u: { x: 44, y: 16, w: 4, h: 4 },
                            d: { x: 48, y: 19, w: 4, h: -4 },
                            f: { x: 44, y: 20, w: 4, h: 12 },
                            b: { x: 52, y: 20, w: 4, h: 12 },
                        },
                        {
                            l: { x: 48, y: 36, w: 4, h: 12 },
                            r: { x: 40, y: 36, w: 4, h: 12 },
                            u: { x: 44, y: 32, w: 4, h: 4 },
                            d: { x: 48, y: 35, w: 4, h: -4 },
                            f: { x: 44, y: 36, w: 4, h: 12 },
                            b: { x: 52, y: 36, w: 4, h: 12 },
                        },
                    ],
                    armRS: [
                        {
                            l: { x: 47, y: 20, w: 4, h: 12 },
                            r: { x: 40, y: 20, w: 4, h: 12 },
                            u: { x: 44, y: 16, w: 3, h: 4 },
                            d: { x: 47, y: 19, w: 3, h: -4 },
                            f: { x: 44, y: 20, w: 3, h: 12 },
                            b: { x: 51, y: 20, w: 3, h: 12 },
                        },
                        {
                            l: { x: 47, y: 36, w: 4, h: 12 },
                            r: { x: 40, y: 36, w: 4, h: 12 },
                            u: { x: 44, y: 32, w: 3, h: 4 },
                            d: { x: 47, y: 35, w: 3, h: -4 },
                            f: { x: 44, y: 36, w: 3, h: 12 },
                            b: { x: 51, y: 36, w: 3, h: 12 },
                        },
                    ],
                    armL: [
                        {
                            l: { x: 40, y: 52, w: 4, h: 12 },
                            r: { x: 32, y: 52, w: 4, h: 12 },
                            u: { x: 36, y: 48, w: 4, h: 4 },
                            d: { x: 40, y: 51, w: 4, h: -4 },
                            f: { x: 36, y: 52, w: 4, h: 12 },
                            b: { x: 44, y: 52, w: 4, h: 12 },
                        },
                        {
                            l: { x: 56, y: 52, w: 4, h: 12 },
                            r: { x: 48, y: 52, w: 4, h: 12 },
                            u: { x: 52, y: 48, w: 4, h: 4 },
                            d: { x: 56, y: 51, w: 4, h: -4 },
                            f: { x: 52, y: 52, w: 4, h: 12 },
                            b: { x: 60, y: 52, w: 4, h: 12 },
                        },
                    ],
                    armLS: [
                        {
                            l: { x: 39, y: 52, w: 4, h: 12 },
                            r: { x: 32, y: 52, w: 4, h: 12 },
                            u: { x: 36, y: 48, w: 3, h: 4 },
                            d: { x: 39, y: 51, w: 3, h: -4 },
                            f: { x: 36, y: 52, w: 3, h: 12 },
                            b: { x: 43, y: 52, w: 3, h: 12 },
                        },
                        {
                            l: { x: 55, y: 52, w: 4, h: 12 },
                            r: { x: 48, y: 52, w: 4, h: 12 },
                            u: { x: 52, y: 48, w: 3, h: 4 },
                            d: { x: 55, y: 51, w: 3, h: -4 },
                            f: { x: 52, y: 52, w: 3, h: 12 },
                            b: { x: 59, y: 52, w: 3, h: 12 },
                        },
                    ],
                    legR: [
                        {
                            l: { x: 8, y: 20, w: 4, h: 12 },
                            r: { x: 0, y: 20, w: 4, h: 12 },
                            u: { x: 4, y: 16, w: 4, h: 4 },
                            d: { x: 8, y: 19, w: 4, h: -4 },
                            f: { x: 4, y: 20, w: 4, h: 12 },
                            b: { x: 12, y: 20, w: 4, h: 12 },
                        },
                        {
                            l: { x: 8, y: 36, w: 4, h: 12 },
                            r: { x: 0, y: 36, w: 4, h: 12 },
                            u: { x: 4, y: 32, w: 4, h: 4 },
                            d: { x: 8, y: 35, w: 4, h: -4 },
                            f: { x: 4, y: 36, w: 4, h: 12 },
                            b: { x: 12, y: 36, w: 4, h: 12 },
                        },
                    ],
                    legL: [
                        {
                            l: { x: 24, y: 52, w: 4, h: 12 },
                            r: { x: 16, y: 52, w: 4, h: 12 },
                            u: { x: 20, y: 48, w: 4, h: 4 },
                            d: { x: 24, y: 51, w: 4, h: -4 },
                            f: { x: 20, y: 52, w: 4, h: 12 },
                            b: { x: 28, y: 52, w: 4, h: 12 },
                        },
                        {
                            l: { x: 8, y: 52, w: 4, h: 12 },
                            r: { x: 0, y: 52, w: 4, h: 12 },
                            u: { x: 4, y: 48, w: 4, h: 4 },
                            d: { x: 8, y: 51, w: 4, h: -4 },
                            f: { x: 4, y: 52, w: 4, h: 12 },
                            b: { x: 12, y: 52, w: 4, h: 12 },
                        },
                    ],
                },
            ];
        }

        loadImage(imgUrl) {
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.src = imgUrl;
                image.addEventListener("load", function (event) {
                    resolve({ image, event });
                });
                image.addEventListener("error", reject);
            });
        }

        toCanvas(image, x, y, w, h) {
            x = typeof x === "undefined" ? 0 : x;
            y = typeof y === "undefined" ? 0 : y;
            w = typeof w === "undefined" ? image.width : w;
            h = typeof h === "undefined" ? image.height : h;
            let canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(image, x, y, w, h, 0, 0, w, h);
            return canvas;
        }

        makeOpaque(image) {
            let canvas = this.toCanvas(image);
            let ctx = canvas.getContext("2d");
            let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let pixels = data.data;
            for (let p = 3; p < pixels.length; p += 4) {
                pixels[p] = 255;
            }
            ctx.putImageData(data, 0, 0);
            return canvas;
        }

        hasAlphaLayer(image) {
            let canvas = this.toCanvas(image);
            let ctx = canvas.getContext("2d");
            let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let pixels = data.data;
            for (let p = 3; p < pixels.length; p += 4) {
                if (pixels[p] !== 255) {
                    return true;
                }
            }
            return false;
        }

        capeScale(height) {
            if (height % 22 === 0) {
                return height / 22;
            } else if (height % 17 === 0) {
                return height / 17;
            } else if (height >= 32 && (height & (height - 1)) === 0) {
                return height / 32;
            } else {
                return Math.max(1, Math.floor(height / 22));
            }
        }

        colorFaces(geometry, canvas, rectangles) {
            if (!rectangles) return null;
            let pixels = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
            let f = 0;
            let faces = [];
            let materials = [];
            let materialIndexMap = {};
            let side = THREE.FrontSide;
            Object.keys(rectangles).forEach(function (k) {
                let rect = rectangles[k];
                let width = Math.abs(rect.w);
                let height = Math.abs(rect.h);
                let dj = Math.sign(rect.w);
                let di = Math.sign(rect.h);
                for (let y = 0, i = rect.y; y < height; y++, i += di) {
                    for (let x = 0, j = rect.x; x < width; x++, j += dj, f += 2) {
                        let p = 4 * (i * canvas.width + j);
                        let a = pixels[p + 3];
                        if (a === 0) {
                            side = THREE.DoubleSide;
                            continue;
                        }
                        let materialIndex = materialIndexMap[a];
                        if (typeof materialIndex === "undefined") {
                            materials.push(
                                new THREE.MeshLambertMaterial({
                                    vertexColors: THREE.FaceColors,
                                    opacity: a / 255,
                                    transparent: a !== 255,
                                })
                            );
                            materialIndex = materials.length - 1;
                            materialIndexMap[a] = materialIndex;
                            if (a !== 255) {
                                side = THREE.DoubleSide;
                            }
                        }
                        let face1 = geometry.faces[f];
                        let face2 = geometry.faces[f + 1];
                        face1.color.r = pixels[p] / 255;
                        face1.color.g = pixels[p + 1] / 255;
                        face1.color.b = pixels[p + 2] / 255;
                        face2.color = face1.color;
                        face1.materialIndex = materialIndex;
                        face2.materialIndex = materialIndex;
                        faces.push(face1);
                        faces.push(face2);
                    }
                }
            });
            if (faces.length === 0) return null;
            geometry.faces = faces;
            materials.forEach(function (m) {
                m.side = side;
            });
            return new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(geometry), materials);
        }

        buildMinecraftModel(skinImage, capeImage, slim, flip) {
            if (skinImage.width < 64 || skinImage.height < 32) {
                return null;
            }
            let skinLayout = this.skinLayout;
            let EPSILON = this.EPSILON;

            let version = skinImage.height >= 64 ? 1 : 0;
            let cs = capeImage ? this.capeScale(capeImage.height) : null;
            let opaqueSkinCanvas = this.makeOpaque(skinImage);
            let transparentSkinCanvas = this.toCanvas(skinImage);
            let hasAlpha = this.hasAlphaLayer(skinImage);
            let headGroup = new THREE.Object3D();
            headGroup.position.x = 0;
            headGroup.position.y = 12;
            headGroup.position.z = 0;
            let box = new THREE.BoxGeometry(8, 8, 8, 8, 8, 8);
            let headMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["head"][0]);
            headGroup.add(headMesh);
            if (hasAlpha) {
                box = new THREE.BoxGeometry(9, 9, 9, 8, 8, 8);
                let hatMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["head"][1]);
                hatMesh && headGroup.add(hatMesh);
            }
            let torsoGroup = new THREE.Object3D();
            torsoGroup.position.x = 0;
            torsoGroup.position.y = 2;
            torsoGroup.position.z = 0;
            box = new THREE.BoxGeometry(8 + EPSILON, 12 + EPSILON, 4 + EPSILON, 8, 12, 4);
            let torsoMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["torso"][0]);
            torsoGroup.add(torsoMesh);
            if (version >= 1 && hasAlpha) {
                box = new THREE.BoxGeometry(8.5 + EPSILON, 12.5 + EPSILON, 4.5 + EPSILON, 8, 12, 4);
                let jacketMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["torso"][1]);
                jacketMesh && torsoGroup.add(jacketMesh);
            }
            let rightArmGroup = new THREE.Object3D();
            rightArmGroup.position.x = slim ? -5.5 : -6;
            rightArmGroup.position.y = 6;
            rightArmGroup.position.z = 0;
            let rightArmMesh;
            if (slim) {
                box = new THREE.BoxGeometry(3, 12, 4, 3, 12, 4).translate(0, -4, 0);
                rightArmMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["armRS"][0]);
            } else {
                box = new THREE.BoxGeometry(4, 12, 4, 4, 12, 4).translate(0, -4, 0);
                rightArmMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["armR"][0]);
            }
            rightArmGroup.add(rightArmMesh);
            if (version >= 1 && hasAlpha) {
                let rightSleeveMesh;
                if (slim) {
                    box = new THREE.BoxGeometry(3.5 + EPSILON * 4, 12.5 + EPSILON * 4, 4.5 + EPSILON * 4, 3, 12, 4).translate(0, -4, 0);
                    rightSleeveMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["armRS"][1]);
                } else {
                    box = new THREE.BoxGeometry(4.5 + EPSILON * 4, 12.5 + EPSILON * 4, 4.5 + EPSILON * 4, 4, 12, 4).translate(0, -4, 0);
                    rightSleeveMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["armR"][1]);
                }
                rightSleeveMesh && rightArmGroup.add(rightSleeveMesh);
            }
            let leftArmGroup = new THREE.Object3D();
            leftArmGroup.position.x = slim ? 5.5 : 6;
            leftArmGroup.position.y = 6;
            leftArmGroup.position.z = 0;
            let leftArmMesh;
            if (slim) {
                box = new THREE.BoxGeometry(3, 12, 4, 3, 12, 4).translate(0, -4, 0);
                leftArmMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["armLS"][0]);
            } else {
                box = new THREE.BoxGeometry(4, 12, 4, 4, 12, 4).translate(0, -4, 0);
                leftArmMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["armL"][0]);
            }
            leftArmGroup.add(leftArmMesh);
            if (version >= 1 && hasAlpha) {
                let leftSleeveMesh;
                if (slim) {
                    box = new THREE.BoxGeometry(3.5 + EPSILON * 4, 12.5 + EPSILON * 4, 4.5 + EPSILON * 4, 3, 12, 4).translate(0, -4, 0);
                    leftSleeveMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["armLS"][1]);
                } else {
                    box = new THREE.BoxGeometry(4.5 + EPSILON * 4, 12.5 + EPSILON * 4, 4.5 + EPSILON * 4, 4, 12, 4).translate(0, -4, 0);
                    leftSleeveMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["armL"][1]);
                }
                leftSleeveMesh && leftArmGroup.add(leftSleeveMesh);
            }
            let rightLegGroup = new THREE.Object3D();
            rightLegGroup.position.x = -2;
            rightLegGroup.position.y = -4;
            rightLegGroup.position.z = 0;
            box = new THREE.BoxGeometry(4, 12, 4, 4, 12, 4).translate(0, -6, 0);
            let rightLegMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["legR"][0]);
            rightLegGroup.add(rightLegMesh);
            if (version >= 1 && hasAlpha) {
                box = new THREE.BoxGeometry(4.5 + EPSILON * 2, 12.5 + EPSILON * 2, 4.5 + EPSILON * 2, 4, 12, 4).translate(0, -6, 0);
                let rightPantMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["legR"][1]);
                rightPantMesh && rightLegGroup.add(rightPantMesh);
            }
            let leftLegGroup = new THREE.Object3D();
            leftLegGroup.position.x = 2;
            leftLegGroup.position.y = -4;
            leftLegGroup.position.z = 0;
            box = new THREE.BoxGeometry(4, 12, 4, 4, 12, 4).translate(0, -6, 0);
            let leftLegMesh = this.colorFaces(box, opaqueSkinCanvas, skinLayout[version]["legL"][0]);
            leftLegGroup.add(leftLegMesh);
            if (version >= 1 && hasAlpha) {
                box = new THREE.BoxGeometry(4.5 + EPSILON * 3, 12.5 + EPSILON * 3, 4.5 + EPSILON * 3, 4, 12, 4).translate(0, -6, 0);
                let leftPantMesh = this.colorFaces(box, transparentSkinCanvas, skinLayout[version]["legL"][1]);
                leftPantMesh && leftLegGroup.add(leftPantMesh);
            }
            let playerGroup = new THREE.Object3D();
            playerGroup.add(headGroup);
            playerGroup.add(torsoGroup);
            playerGroup.add(rightArmGroup);
            playerGroup.add(leftArmGroup);
            playerGroup.add(rightLegGroup);
            playerGroup.add(leftLegGroup);
            if (capeImage) {
                let capeCanvas = makeOpaque(capeImage);
                let capeGroup = new THREE.Object3D();
                capeGroup.position.x = 0;
                capeGroup.position.y = 8;
                capeGroup.position.z = -2;
                capeGroup.rotation.y += radians(180);
                let capeMesh;
                box = new THREE.BoxGeometry(10, 16, 1, 10 * cs, 16 * cs, cs).translate(0, -8, 0.5);
                capeMesh = this.colorFaces(box, capeCanvas, {
                    left: { x: 11 * cs, y: cs, w: cs, h: 16 * cs },
                    right: { x: 0, y: cs, w: cs, h: 16 * cs },
                    top: { x: cs, y: 0, w: 10 * cs, h: cs },
                    bottom: { x: 11 * cs, y: cs - 1, w: 10 * cs, h: -cs },
                    front: { x: cs, y: cs, w: 10 * cs, h: 16 * cs },
                    back: { x: 12 * cs, y: cs, w: 10 * cs, h: 16 * cs },
                });
                capeGroup.add(capeMesh);
                playerGroup.add(capeGroup);
            }
            if (flip) {
                playerGroup.rotation.z += radians(180);
            }
            return playerGroup;
        }

        radians(d) {
            return d * (this.TAU / 360);
        }

        animate(renderState) {
            renderState.timestamp = Date.now();
            window.requestAnimationFrame(this.renderAnimation.bind(this, renderState));
        }

        renderAnimation(renderState) {
            if (renderState.animate) {
                let now = Date.now();
                renderState.time += (now - renderState.timestamp) * (360 / 1500);
                renderState.timestamp = now;
                this.render(renderState);
                window.requestAnimationFrame(this.renderAnimation.bind(this, renderState));
            }
        }

        enableRotation(renderState) {
            const startRotation = (t, id) => {
                renderState.dragState[id] = { x: t.screenX, y: t.screenY };
            };

            const rotate = (t, id) => {
                if (!renderState.dragState[id]) {
                    return false;
                }
                let result = true;
                renderState.theta += t.screenX - renderState.dragState[id].x;
                renderState.phi += t.screenY - renderState.dragState[id].y;
                if (renderState.phi < -90) {
                    renderState.phi = -90;
                    result = false;
                } else if (renderState.phi > 90) {
                    renderState.phi = 90;
                    result = false;
                }
                renderState.model.rotation.y = this.radians(renderState.theta);
                renderState.model.rotation.x = this.radians(renderState.phi);
                renderState.renderer.render(renderState.scene, renderState.camera);
                renderState.dragState[id].x = t.screenX;
                renderState.dragState[id].y = t.screenY;
                return result;
            };

            const endRotation = (t, id) => {
                delete renderState.dragState[id];
            };

            renderState.canvas.addEventListener("mousedown", (e) => {
                e.preventDefault();
                startRotation(e, "mouse");
            });

            window.addEventListener("mousemove", (e) => {
                rotate(e, "mouse");
            });

            window.addEventListener("mouseup", (e) => {
                endRotation(e, "mouse");
            });

            renderState.canvas.ontouchstart = function (e) {
                for (let i = 0; i < e.changedTouches.length; i++) {
                    startRotation(e.changedTouches[i], e.changedTouches[i].identifier);
                }
            };
            renderState.canvas.ontouchmove = function (e) {
                let result = false;
                for (let i = 0; i < e.changedTouches.length; i++) {
                    if (rotate(e.changedTouches[i], e.changedTouches[i].identifier)) {
                        result = true;
                    } else {
                        delete renderState.dragState[e.changedTouches[i].identifier];
                    }
                }
                if (result) {
                    e.preventDefault();
                }
            };
            renderState.canvas.ontouchend = renderState.canvas.ontouchcancel = function (e) {
                for (let i = 0; i < e.changedTouches.length; i++) {
                    endRotation(e.changedTouches[i], e.changedTouches[i].identifier);
                }
            };
        }

        render(renderState) {
            let angle = Math.sin(this.radians(renderState.time));
            renderState.model.children[2].rotation.x = -this.radians(18) * angle;
            renderState.model.children[3].rotation.x = this.radians(18) * angle;
            renderState.model.children[4].rotation.x = this.radians(20) * angle;
            renderState.model.children[5].rotation.x = -this.radians(20) * angle;
            if (renderState.model.children[6]) {
                let capeAngle = Math.sin(this.radians(renderState.time / 4));
                renderState.model.children[6].rotation.x = this.radians(18) - this.radians(6) * capeAngle;
            }
            renderState.renderer.render(renderState.scene, renderState.camera);
            if (renderState.canvas !== renderState.renderer.domElement) {
                renderState.canvas.getContext("2d").drawImage(renderState.renderer.domElement, 0, 0);
            }
        }

        avatar(canvas, imgUrl) {
            return new Promise(async (resolve, reject) => {
                try {
                    if (!canvas) throw new Error("丢失 canvas 容器");
                    if (!imgUrl) imgUrl = canvas.getAttribute("data-skin");
                    if (!imgUrl) throw new Error("未指定皮肤资源");

                    const { image } = await this.loadImage(imgUrl);

                    const opaque = this.makeOpaque(image);

                    let ctx = canvas.getContext("2d");
                    ctx.mozImageSmoothingEnabled = false;
                    ctx.webkitImageSmoothingEnabled = false;
                    ctx.msImageSmoothingEnabled = false;
                    ctx.imageSmoothingEnabled = false;
                    ctx.drawImage(opaque, 8, 8, 8, 8, 0, 0, canvas.width, canvas.height);
                    if (this.hasAlphaLayer(image)) ctx.drawImage(image, 40, 8, 8, 8, 0, 0, canvas.width, canvas.height);

                    resolve({ canvas, base64: canvas.toDataURL("image/png", 1) });
                } catch (error) {
                    reject(error);
                }
            });
        }

        skin2d(canvas, imgUrl) {
            return new Promise(async (resolve, reject) => {
                try {
                    if (!canvas) throw new Error("丢失 canvas 容器");
                    if (!imgUrl) imgUrl = canvas.getAttribute("data-skin");
                    if (!imgUrl) throw new Error("未指定皮肤资源");

                    const { image } = await this.loadImage(imgUrl);

                    const opaque = this.makeOpaque(image);

                    let ctx = canvas.getContext("2d");
                    ctx.save();
                    ctx.mozImageSmoothingEnabled = false;
                    ctx.webkitImageSmoothingEnabled = false;
                    ctx.msImageSmoothingEnabled = false;
                    ctx.imageSmoothingEnabled = false;
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    let scale;
                    scale = Math.min(Math.floor(canvas.width / 16), Math.floor(canvas.height / 32)) - 1;
                    ctx.scale(scale, scale);
                    ctx.drawImage(opaque, 8, 8, 8, 8, -4, -16, 8, 8);
                    ctx.drawImage(opaque, 20, 20, 8, 12, -4, -8, 8, 12);
                    ctx.drawImage(opaque, 44, 20, 4, 12, -8, -8, 4, 12);
                    let version = image.height >= 64 ? 1 : 0;
                    if (version === 0) {
                        ctx.save();
                        ctx.scale(-1, 1);
                        ctx.drawImage(opaque, 44, 20, 4, 12, -8, -8, 4, 12);
                        ctx.restore();
                    } else {
                        ctx.drawImage(opaque, 36, 52, 4, 12, 4, -8, 4, 12);
                    }
                    ctx.drawImage(opaque, 4, 20, 4, 12, -4, 4, 4, 12);
                    if (version === 0) {
                        ctx.save();
                        ctx.scale(-1, 1);
                        ctx.drawImage(opaque, 4, 20, 4, 12, -4, 4, 4, 12);
                        ctx.restore();
                    } else {
                        ctx.drawImage(opaque, 20, 52, 4, 12, 0, 4, 4, 12);
                    }
                    if (this.hasAlphaLayer(image)) {
                        ctx.drawImage(image, 40, 8, 8, 8, -4, -16, 8, 8);
                        if (version >= 1) {
                            ctx.drawImage(image, 20, 36, 8, 12, -4, -8, 8, 12);
                            ctx.drawImage(image, 44, 36, 4, 12, -8, -8, 4, 12);
                            ctx.drawImage(image, 52, 52, 4, 12, 4, -8, 4, 12);
                            ctx.drawImage(image, 4, 36, 4, 12, -4, 4, 4, 12);
                            ctx.drawImage(image, 4, 52, 4, 12, 0, 4, 4, 12);
                        }
                    }
                    resolve({ canvas, base64: canvas.toDataURL("image/png", 1) });
                } catch (error) {
                    reject(error);
                }
            });
        }

        skin3dImage(imgUrl, opt = {}) {
            return new Promise(async (resolve, reject) => {
                try {
                    if (!imgUrl) imgUrl = canvas.getAttribute("data-skin");
                    if (!imgUrl) throw new Error("未指定皮肤资源");

                    const canvas = document.createElement("canvas");
                    canvas.width = opt.width || 600;
                    canvas.height = opt.height || 800;

                    const { image } = await this.loadImage(imgUrl);

                    const theta = parseFloat(canvas.getAttribute("data-theta")) || 30;
                    const phi = parseFloat(canvas.getAttribute("data-phi")) || 25;
                    const flip = canvas.getAttribute("data-flip") === "true";
                    const slim = canvas.getAttribute("data-model") === "slim" ? true : false;
                    const time = 90;

                    let model = this.buildMinecraftModel(image, null, slim, flip);

                    if (model) {
                        let renderState = {
                            canvas: canvas,
                            animate: false,
                            model: model,
                            theta: theta,
                            phi: phi,
                            scene: new THREE.Scene(),
                            camera: new THREE.PerspectiveCamera(38, canvas.width / canvas.height, 60 - 20, 60 + 20),
                            renderer: new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true }),
                            dragState: {},
                            time: time,
                        };

                        renderState.camera.position.x = 0;
                        renderState.camera.position.z = 60;
                        renderState.camera.position.y = 0;
                        renderState.camera.lookAt(new THREE.Vector3(0, 0, 0));
                        renderState.scene.add(model);
                        let ambLight = new THREE.AmbientLight(0xffffff, 0.7);
                        let dirLight = new THREE.DirectionalLight(0xffffff, 0.3);
                        dirLight.position.set(0.67763, 0.28571, 0.67763);
                        renderState.scene.add(ambLight);
                        renderState.scene.add(dirLight);
                        renderState.model.rotation.y = this.radians(theta);
                        renderState.model.rotation.x = this.radians(phi);

                        this.render(renderState);

                        resolve({
                            canvas,
                            base64: canvas.toDataURL("image/png", 1),
                        });
                    } else {
                        reject();
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }

        skin3d(canvas, imgUrl) {
            return new Promise(async (resolve, reject) => {
                try {
                    if (!canvas) throw new Error("丢失 canvas 容器");
                    if (!imgUrl) imgUrl = canvas.getAttribute("data-skin");
                    if (!imgUrl) throw new Error("未指定皮肤资源");

                    const { image } = await this.loadImage(imgUrl);

                    const theta = parseFloat(canvas.getAttribute("data-theta")) || 30;
                    const phi = parseFloat(canvas.getAttribute("data-phi")) || 25;
                    const animate = canvas.getAttribute("data-animate") === "true";
                    const rotate = canvas.getAttribute("data-rotate") === "true";
                    const flip = canvas.getAttribute("data-flip") === "true";
                    const slim = canvas.getAttribute("data-model") === "slim" ? true : false;
                    const time = 90;

                    let model = this.buildMinecraftModel(image, null, slim, flip);

                    if (model) {
                        let renderState = {
                            canvas: canvas,
                            animate: animate,
                            model: model,
                            theta: theta,
                            phi: phi,
                            scene: new THREE.Scene(),
                            camera: new THREE.PerspectiveCamera(38, canvas.width / canvas.height, 60 - 20, 60 + 20),
                            renderer: new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true }),
                            dragState: {},
                            time: time,
                        };

                        renderState.camera.position.x = 0;
                        renderState.camera.position.z = 60;
                        renderState.camera.position.y = 0;
                        renderState.camera.lookAt(new THREE.Vector3(0, 0, 0));
                        renderState.scene.add(model);
                        let ambLight = new THREE.AmbientLight(0xffffff, 0.7);
                        let dirLight = new THREE.DirectionalLight(0xffffff, 0.3);
                        dirLight.position.set(0.67763, 0.28571, 0.67763);
                        renderState.scene.add(ambLight);
                        renderState.scene.add(dirLight);
                        renderState.model.rotation.y = this.radians(theta);
                        renderState.model.rotation.x = this.radians(phi);

                        this.render(renderState);

                        if (animate) this.animate(renderState);
                        if (rotate) this.enableRotation(renderState);

                        resolve({
                            canvas,
                            renderState,
                            animate: {
                                pause: () => {
                                    renderState.animate = false;
                                    this.animate(renderState);
                                },
                                continue: () => {
                                    renderState.animate = true;
                                    this.animate(renderState);
                                },
                            },
                            base64: canvas.toDataURL("image/png", 1),
                        });
                    } else {
                        reject();
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }
    }

    if (typeof window !== "undefined") window.skinRender = new SkinRender();
    if (typeof Vue !== "undefined") Vue.prototype.skinRender = new SkinRender();
    if (typeof jQuery !== "undefined") jQuery.extend({ skinRender: new SkinRender() });
})();