"use client";

import React from "react";

/**
 * 所有花瓣形状的绘制函数（从你的 CreateJS 代码转换而来）
 */
const shapeDrawers: Record<string, (ctx: CanvasRenderingContext2D) => void> = {
    sakura1: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(26.4, 13.9);
        ctx.bezierCurveTo(26.5, 11.8, 26.3, 9.5, 25.7, 7);
        ctx.bezierCurveTo(24.6, 1.7, 22.5, 1.3, 21.1, 0.6);
        ctx.bezierCurveTo(19.1, -0.5, 16.9, -0.3, 15.6, 1.6);
        ctx.bezierCurveTo(11.7, 7.3, 11.7, 15.9, 12.9, 22.6);
        ctx.bezierCurveTo(13.3, 25.3, 13.4, 27.7, 13.2, 29.7);
        ctx.bezierCurveTo(12.8, 30, 12.4, 30.4, 12, 30.7);
        ctx.bezierCurveTo(7, 34.8, 2.7, 37.2, 2.7, 37.2);
        ctx.bezierCurveTo(2.7, 37.2, -2.1, 41.5, 1, 41.2);
        ctx.bezierCurveTo(2.6, 41.1, 5.1, 41.9, 7.9, 42);
        ctx.bezierCurveTo(10.7, 42.1, 13.7, 41.6, 16.3, 39);
        ctx.bezierCurveTo(18.9, 36.4, 21.6, 32, 23.7, 27.3);
        ctx.bezierCurveTo(25.6, 22.8, 26.8, 18.1, 26.4, 13.9);
        ctx.closePath();
        ctx.fill();
    },
    sakura2: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(2.2, 39.4);
        ctx.bezierCurveTo(5.8, 39.8, 10.6, 36.3, 13.2, 34.1);
        ctx.bezierCurveTo(17.6, 30.2, 21.9, 26.2, 26.6, 22.5);
        ctx.bezierCurveTo(33.6, 16.9, 32.8, 6.7, 29, 3.1);
        ctx.bezierCurveTo(21.7, -3.7, 9.8, 2.1, 5, 8.9);
        ctx.bezierCurveTo(1.6, 13.7, 0.01, 19.5, 0, 25.3);
        ctx.bezierCurveTo(0, 26.7, 0.4, 39.2, 2.2, 39.4);
        ctx.closePath();
        ctx.fill();
    },
    sakura3: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(35.3, 5.4);
        ctx.bezierCurveTo(35.3, 5.3, 35.3, 5.2, 35.3, 5.2);
        ctx.bezierCurveTo(35.3, 5.2, 35.3, 5.1, 35.3, 5.1);
        ctx.bezierCurveTo(35.3, 4.1, 35, 3.2, 34.6, 2.5);
        ctx.bezierCurveTo(34.6, 2.4, 34.5, 2.4, 34.5, 2.3);
        ctx.bezierCurveTo(34.5, 2.3, 34.5, 2.3, 34.5, 2.3);
        ctx.bezierCurveTo(33.9, 1.4, 33.1, 0.7, 32.2, 0.4);
        ctx.bezierCurveTo(26.9, -1.7, 19.8, 3.8, 16.6, 7.5);
        ctx.bezierCurveTo(10.7, 14.4, 9.3, 22.8, 5.9, 31);
        ctx.bezierCurveTo(3.7, 36.2, 0.3, 40.8, 0.3, 40.8);
        ctx.bezierCurveTo(-1.2, 42.4, 2.3, 41.8, 7, 38.1);
        ctx.bezierCurveTo(9, 36.6, 12.5, 33.7, 16.2, 30.7);
        ctx.bezierCurveTo(20.1, 27.5, 24.1, 24.1, 26.1, 21.9);
        ctx.bezierCurveTo(30.3, 17.5, 32.9, 13.8, 34.3, 10.6);
        ctx.bezierCurveTo(35.1, 8.7, 35.4, 7, 35.3, 5.4);
        ctx.closePath();
        ctx.fill();
    },
    sakura4: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(4.4, 0.9);
        ctx.bezierCurveTo(9.4, 3, 13.6, 4.2, 16.8, 6.8);
        ctx.bezierCurveTo(28.9, 17, 26.9, 22.7, 25.1, 25.9);
        ctx.bezierCurveTo(22.8, 29.9, 7.9, 31, 4.2, 16.5);
        ctx.bezierCurveTo(3.3, 13, 2.7, 8.6, 0.5, 3.1);
        ctx.bezierCurveTo(-1.2, -1.1, 1.8, -0.2, 4.4, 0.9);
        ctx.closePath();
        ctx.fill();
    },
    sakura5: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(52.9, 2.7);
        ctx.bezierCurveTo(50.9, -1, 44.7, 0.2, 41.4, 0.4);
        ctx.bezierCurveTo(36.9, 0.7, 31.4, 1.3, 26.2, 1.9);
        ctx.bezierCurveTo(21, 2.4, 14.5, 2.6, 9.2, 2.9);
        ctx.lineTo(0, 3.3);
        ctx.bezierCurveTo(4.7, 8.8, 9.6, 12.2, 14.7, 14.3);
        ctx.bezierCurveTo(19.8, 16.4, 25, 17.1, 30, 16.9);
        ctx.bezierCurveTo(35, 16.7, 39.9, 15.6, 43.9, 14);
        ctx.bezierCurveTo(47.3, 12.6, 50.2, 10.9, 52.2, 8.9);
        ctx.bezierCurveTo(54, 7.9, 54.8, 6.1, 52.9, 2.7);
        ctx.closePath();
        ctx.fill();
    },
    sakura6: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(1.2, 0);
        ctx.bezierCurveTo(4.5, 0, 12.8, 0.4, 21, 2.4);
        ctx.bezierCurveTo(28.2, 4.1, 41, 8, 40.1, 17.6);
        ctx.bezierCurveTo(40.1, 17.9, 40, 18.1, 39.8, 18.3);
        ctx.bezierCurveTo(39.6, 18.4, 39.4, 18.4, 39.3, 18.4);
        ctx.bezierCurveTo(37.6, 18.4, 36.4, 19.1, 34.7, 18.5);
        ctx.bezierCurveTo(30.2, 16.8, 24.9, 13.1, 19.5, 9.9);
        ctx.bezierCurveTo(14.1, 6.6, 8.7, 3.7, 4.8, 2.9);
        ctx.bezierCurveTo(-3.1, 1.5, 1.2, 0, 1.2, 0);
        ctx.closePath();
        ctx.fill();
    },
    sakura7: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(3.2, 9.7);
        ctx.bezierCurveTo(6.1, 12.7, 19.8, 23.1, 31.2, 25.2);
        ctx.bezierCurveTo(33.9, 25.7, 40.8, 25.4, 43.3, 23.4);
        ctx.bezierCurveTo(45.5, 21.7, 46.2, 16.4, 45.6, 13.7);
        ctx.bezierCurveTo(44.8, 10.2, 38.5, 0.299999999999999, 28.6, 0);
        ctx.bezierCurveTo(22.2, -0.2, 12.2, 2.1, 9.4, 3.3);
        ctx.bezierCurveTo(6.6, 4.4, 2.8, 3.2, 1, 3.3);
        ctx.bezierCurveTo(-1.5, 3.4, 1.2, 7.7, 3.2, 9.7);
        ctx.closePath();
        ctx.fill();
    },
    sakura8: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(15.5, 0);
        ctx.bezierCurveTo(13.5, 0.2, 10.6, 3.9, 7.8, 8.1);
        ctx.bezierCurveTo(5, 12.3, 2.3, 17, 1.1, 19.6);
        ctx.bezierCurveTo(-0.0999999999999999, 22.3, -0.2, 25.7, 0.3, 28.8);
        ctx.bezierCurveTo(0.8, 31.9, 1.8, 34.8, 2.9, 36.2);
        ctx.bezierCurveTo(5, 38.9, 9.9, 39, 12.8, 39.7);
        ctx.bezierCurveTo(17.2, 40.7, 21.3, 36.1, 23.5, 32.9);
        ctx.bezierCurveTo(26.9, 28, 26.8, 24.6, 25.3, 19.1);
        ctx.bezierCurveTo(24.3, 15.5, 23, 11.7, 21.7, 9.40000000000001);
        ctx.bezierCurveTo(19.3, 4.9, 16.5, -0.1, 15.5, 0);
        ctx.closePath();
        ctx.fill();
    },
    sakura9: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(26.5, 22.3);
        ctx.bezierCurveTo(18.6, 28.2, 10.7, 31.9, 2.4, 27.7);
        ctx.bezierCurveTo(-0.2, 26.4, -1, 17.5, 1.6, 14.3);
        ctx.bezierCurveTo(4.2, 11.1, 7.9, 7.9, 13.4, 6);
        ctx.bezierCurveTo(24.4, 2.2, 28.5, 7.9, 33.4, 1.7);
        ctx.bezierCurveTo(36.1, -1.8, 37.2, 0.6, 36.7, 4.2);
        ctx.bezierCurveTo(36.5, 5.9, 32, 18.2, 26.5, 22.3);
        ctx.closePath();
        ctx.fill();
    },
    sakura10: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(6.9, 3.3);
        ctx.bezierCurveTo(3.3, 6, 0, 11.5, 0, 16.3);
        ctx.bezierCurveTo(0, 32.1, 8.7, 29, 20.3, 24.6);
        ctx.bezierCurveTo(33, 19.8, 40.8, 22.2, 40.8, 22.2);
        ctx.bezierCurveTo(40.8, 22.2, 42.2, 21.9, 41.5, 20.7);
        ctx.bezierCurveTo(41.5, 20.7, 40.6, 17.9, 38.9, 14.4);
        ctx.bezierCurveTo(34.7, 6, 29.7, 2.6, 21.3, 0.5);
        ctx.bezierCurveTo(15.8, -0.8, 10.4, 0.6, 6.9, 3.3);
        ctx.closePath();
        ctx.fill();
    },
    sakura11: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(28.4, 24.2);
        ctx.bezierCurveTo(26.4, 24.9, 28, 21, 22.1, 19.3);
        ctx.bezierCurveTo(18.3, 18.2, 12.2, 20.2, 8.5, 18.6);
        ctx.bezierCurveTo(3.4, 16.2, 1, 14, 0.2, 10.1);
        ctx.bezierCurveTo(-0.9, 4.3, 2.2, 1.7, 3.8, 0.9);
        ctx.bezierCurveTo(6.9, -0.6, 11.8, -0.3, 15.4, 2.2);
        ctx.bezierCurveTo(20.7, 5.8, 26.4, 13.3, 28.7, 19.5);
        ctx.bezierCurveTo(30.3, 23.4, 29.3, 23.9, 28.4, 24.2);
        ctx.closePath();
        ctx.fill();
    },
    sakura12: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(8.5, 1);
        ctx.bezierCurveTo(11.3, 3, 14.8, 9.9, 15.8, 12.2);
        ctx.bezierCurveTo(18.6, 18.6, 19.5, 20.4, 21.5, 22.6);
        ctx.bezierCurveTo(23.5, 24.9, 20.3, 25.8, 15.6, 22.3);
        ctx.bezierCurveTo(13.2, 20.6, 10.3, 17.9, 7.6, 15);
        ctx.bezierCurveTo(4.9, 12, 2.4, 8.8, 0.7, 5.7);
        ctx.bezierCurveTo(-2.5, -0.4, 5.7, -1, 8.5, 1);
        ctx.closePath();
        ctx.fill();
    },
    sakura13: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(27.2, 29.6);
        ctx.bezierCurveTo(23.7, 28.8, 18.2, 28.1, 12.9, 25.8);
        ctx.bezierCurveTo(7.7, 23.4, 2.7, 19.5, 0.8, 13.1);
        ctx.bezierCurveTo(-1.1, 6.5, 0, 0.1, 8.3, 0);
        ctx.bezierCurveTo(13, -0.1, 15.2, 0.8, 18.6, 4.2);
        ctx.bezierCurveTo(22.4, 8, 26.2, 14.1, 29, 24);
        ctx.bezierCurveTo(29.2, 26.1, 31, 30.4, 27.2, 29.6);
        ctx.closePath();
        ctx.fill();
    },
};

const shapeIds = Object.keys(shapeDrawers);

// ---------- 2. React 组件 ----------
export const SakuraCanvas = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId = 0;
        let frameCount = 0;
        let mounted = true;
        let isDarkMode = false;

        type SakuraParticle = {
            x: number;
            y: number;
            vx: number;
            vy: number;

            totalLife: number;
            currentLife: number;

            startScale: number;
            finishScale: number;

            startAlpha: number;
            finishAlpha: number;

            rotation: number;
            color: string;
            drawer: (ctx: CanvasRenderingContext2D) => void;
        };

        type FireworkRocket = {
            x: number;
            y: number;
            vx: number;
            vy: number;
            targetY: number;
            color: string;
        };

        type FireworkSpark = {
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;
            maxLife: number;
            size: number;
            color: string;
        };

        const sakuraParticles: SakuraParticle[] = [];
        const sakuraPool: SakuraParticle[] = [];

        const rockets: FireworkRocket[] = [];
        const sparks: FireworkSpark[] = [];

        const sakuraConfig = {
            emitFrequency: 10,

            get startX() {
                return window.innerWidth / 2 - 100;
            },

            get startXVariance() {
                return window.innerWidth;
            },

            get startY() {
                return window.innerHeight + 100;
            },

            startYVariance: 0,

            initialDirection: 317,
            initialDirectionVariance: 90,

            initialSpeed: 1,
            initialSpeedVariance: 10,

            friction: 0.01,

            accelerationSpeed: 0.0113,
            accelerationDirection: 290,

            startScale: 1,
            startScaleVariance: 1.5,

            finishScale: 0,
            finishScaleVariance: 0.1,

            lifeSpan: 1000,
            lifeSpanVariance: 50,

            startAlpha: 1,
            startAlphaVariance: 0,

            finishAlpha: 1,
            finishAlphaVariance: 0,
        };

        const sakuraColors = [
            {h: 330, s: 80, l: 92},
            {h: 47, s: 95, l: 83},
            {h: 104, s: 65, l: 78},
            {h: 353, s: 83, l: 84},
            {h: 218, s: 77, l: 88},
            {h: 196, s: 100, l: 82},
            {h: 253, s: 65, l: 80},
        ];

        const fireworkColors = [
            "hsl(330 100% 72%)",
            "hsl(45 100% 68%)",
            "hsl(190 100% 70%)",
            "hsl(260 100% 78%)",
            "hsl(120 80% 72%)",
            "hsl(15 100% 70%)",
            "hsl(0 0% 100%)",
        ];

        const random = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const calcRandomValueWithVariance = (
            value: number,
            variance: number,
            isInteger = false,
        ) => {
            const result = value + (Math.random() - 0.5) * variance;
            return isInteger ? Math.floor(result) : result;
        };

        const calcRandomValueWithRange = (
            minValue: number,
            maxValue: number,
            value: number,
        ) => {
            return Math.min(maxValue, Math.max(minValue, value));
        };

        const calcCurrentValue = (
            start: number,
            end: number,
            life: number,
        ) => {
            return start * life + end * (1 - life);
        };

        const getIsDarkMode = () => {
            const html = document.documentElement;
            const colorScheme = getComputedStyle(html).colorScheme;

            return html.classList.contains("dark") || colorScheme === "dark";
        };

        const clearParticles = () => {
            sakuraParticles.length = 0;
            sakuraPool.length = 0;
            rockets.length = 0;
            sparks.length = 0;
            frameCount = 0;
        };

        const updateMode = () => {
            const nextIsDarkMode = getIsDarkMode();

            if (nextIsDarkMode !== isDarkMode) {
                isDarkMode = nextIsDarkMode;
                clearParticles();
            }
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);

            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const createSakuraParticle = (): SakuraParticle => {
            const particle = (sakuraPool.pop() ?? {}) as SakuraParticle;

            particle.x = calcRandomValueWithVariance(
                sakuraConfig.startX,
                sakuraConfig.startXVariance,
            );

            particle.y = calcRandomValueWithVariance(
                sakuraConfig.startY,
                sakuraConfig.startYVariance,
            );

            const speed = Math.max(
                0,
                calcRandomValueWithVariance(
                    sakuraConfig.initialSpeed,
                    sakuraConfig.initialSpeedVariance,
                ),
            );

            const angle = (
                calcRandomValueWithVariance(
                    sakuraConfig.initialDirection,
                    sakuraConfig.initialDirectionVariance,
                ) * Math.PI
            ) / 180;

            particle.vx = Math.cos(angle) * speed;
            particle.vy = Math.sin(angle) * speed;

            particle.totalLife = Math.max(
                1,
                calcRandomValueWithVariance(
                    sakuraConfig.lifeSpan,
                    sakuraConfig.lifeSpanVariance,
                    true,
                ),
            );

            particle.currentLife = particle.totalLife;

            particle.startAlpha = calcRandomValueWithRange(
                0,
                1,
                calcRandomValueWithVariance(
                    sakuraConfig.startAlpha,
                    sakuraConfig.startAlphaVariance,
                ),
            );

            particle.finishAlpha = calcRandomValueWithRange(
                0,
                1,
                calcRandomValueWithVariance(
                    sakuraConfig.finishAlpha,
                    sakuraConfig.finishAlphaVariance,
                ),
            );

            particle.startScale = Math.max(
                0,
                calcRandomValueWithVariance(
                    sakuraConfig.startScale,
                    sakuraConfig.startScaleVariance,
                ),
            );

            particle.finishScale = Math.max(
                0,
                calcRandomValueWithVariance(
                    sakuraConfig.finishScale,
                    sakuraConfig.finishScaleVariance,
                ),
            );

            particle.rotation = Math.random() * 360;

            const color = sakuraColors[Math.floor(Math.random() * sakuraColors.length)];
            particle.color = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;

            const shapeId = shapeIds[Math.floor(Math.random() * shapeIds.length)];
            particle.drawer = shapeDrawers[shapeId];

            return particle;
        };

        const emitSakuraParticle = () => {
            sakuraParticles.push(createSakuraParticle());
        };

        const emitSakura = () => {
            const framerate = 60;
            const frameInSec = frameCount % framerate;
            const emitPerSec = sakuraConfig.emitFrequency;

            const loopInt = emitPerSec === 0
                ? 0
                : Math.floor(emitPerSec / framerate);

            for (let i = 0; i < loopInt; i++) {
                emitSakuraParticle();
            }

            const loopFloat = emitPerSec / framerate - loopInt;

            if (
                emitPerSec !== 0 &&
                loopFloat > 0 &&
                frameInSec % Math.floor(1 / loopFloat) === 0
            ) {
                emitSakuraParticle();
            }

            frameCount++;

            if (frameCount >= framerate) {
                frameCount = 0;
            }
        };

        const drawSakuraParticle = (particle: SakuraParticle) => {
            const lifePercent = particle.currentLife / particle.totalLife;

            const alpha = calcCurrentValue(
                particle.startAlpha,
                particle.finishAlpha,
                lifePercent,
            );

            const scale = calcCurrentValue(
                particle.startScale,
                particle.finishScale,
                lifePercent,
            );

            ctx.save();

            ctx.translate(particle.x, particle.y);
            ctx.rotate((particle.rotation * Math.PI) / 180);
            ctx.scale(scale, scale);

            ctx.globalAlpha = alpha;
            ctx.fillStyle = particle.color;

            ctx.translate(-25, -25);
            particle.drawer(ctx);

            ctx.restore();
        };

        const updateSakura = () => {
            const accelerationAngle = (
                sakuraConfig.accelerationDirection * Math.PI
            ) / 180;

            const accX = Math.cos(accelerationAngle) * sakuraConfig.accelerationSpeed;
            const accY = Math.sin(accelerationAngle) * sakuraConfig.accelerationSpeed;

            emitSakura();

            for (let i = sakuraParticles.length - 1; i >= 0; i--) {
                const particle = sakuraParticles[i];

                particle.vx += accX;
                particle.vy += accY;

                particle.vx *= 1 - sakuraConfig.friction;
                particle.vy *= 1 - sakuraConfig.friction;

                particle.x += particle.vx;
                particle.y += particle.vy;

                particle.rotation += 1;

                drawSakuraParticle(particle);

                particle.currentLife--;

                if (particle.currentLife < 0) {
                    sakuraParticles.splice(i, 1);
                    sakuraPool.push(particle);
                }
            }
        };

        const createRocket = () => {
            const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];

            rockets.push({
                x: random(window.innerWidth * 0.15, window.innerWidth * 0.85),
                y: window.innerHeight + 20,
                vx: random(-0.8, 0.8),
                vy: random(-9.5, -6.5),
                targetY: random(window.innerHeight * 0.16, window.innerHeight * 0.48),
                color,
            });
        };

        const explode = (rocket: FireworkRocket) => {
            const count = Math.floor(random(72, 128));

            for (let i = 0; i < count; i++) {
                const angle = (Math.PI * 2 * i) / count + random(-0.08, 0.08);
                const speed = random(2.2, 7.2);

                sparks.push({
                    x: rocket.x,
                    y: rocket.y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: random(110, 170),
                    maxLife: 170,
                    size: random(1.8, 3.6),
                    color: rocket.color,
                });
            }

            // 中间再补一点白色闪光
            for (let i = 0; i < 28; i++) {
                const angle = random(0, Math.PI * 2);
                const speed = random(1.2, 3.4);

                sparks.push({
                    x: rocket.x,
                    y: rocket.y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: random(45, 80),
                    maxLife: 80,
                    size: random(1.8, 3.4),
                    color: "hsl(0 0% 100%)",
                });
            }
        };

        const updateFireworks = () => {
            // 频率别太高，不然背景会抢内容注意力
            if (Math.random() < 0.028 && rockets.length < 4) {
                createRocket();
            }

            ctx.save();
            ctx.globalCompositeOperation = "lighter";

            for (let i = rockets.length - 1; i >= 0; i--) {
                const rocket = rockets[i];

                rocket.x += rocket.vx;
                rocket.y += rocket.vy;
                rocket.vy += 0.035;

                ctx.save();
                ctx.globalAlpha = 0.9;
                ctx.fillStyle = rocket.color;
                ctx.beginPath();
                ctx.arc(rocket.x, rocket.y, 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.globalAlpha = 0.35;
                ctx.beginPath();
                ctx.arc(rocket.x, rocket.y + 8, 1.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                if (rocket.y <= rocket.targetY || rocket.vy >= 0) {
                    explode(rocket);
                    rockets.splice(i, 1);
                }
            }

            for (let i = sparks.length - 1; i >= 0; i--) {
                const spark = sparks[i];

                const alpha = Math.max(0, spark.life / spark.maxLife);

                spark.x += spark.vx;
                spark.y += spark.vy;

                spark.vx *= 0.988;
                spark.vy *= 0.988;
                spark.vy += 0.018;

                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.fillStyle = spark.color;

                ctx.beginPath();
                ctx.arc(spark.x, spark.y, spark.size * alpha, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();

                spark.life--;

                if (spark.life <= 0) {
                    sparks.splice(i, 1);
                }
            }

            ctx.restore();
        };

        const tick = () => {
            if (!mounted) return;

            updateMode();

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            if (isDarkMode) {
                updateFireworks();
            } else {
                updateSakura();
            }

            animationFrameId = requestAnimationFrame(tick);
        };

        resize();
        updateMode();

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const observer = new MutationObserver(updateMode);

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "style", "data-theme"],
        });

        window.addEventListener("resize", resize);

        if (!reduceMotion) {
            animationFrameId = requestAnimationFrame(tick);
        }

        return () => {
            mounted = false;

            observer.disconnect();
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);

            clearParticles();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className="fixed inset-0 h-screen w-screen pointer-events-none z-0"
        />
    );
};