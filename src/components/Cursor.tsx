import { useEffect, useRef } from "react";

export default function Cursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const particles: {
        x: number;
        y: number;
        dx: number;
        dy: number;
        life: number;
        maxLife: number;
    }[] = [];

    function createSpark(x: number, y: number) {
        for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 5;

            particles.push({
                x,
                y,
                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed,
                life: 0,
                maxLife: 30 + Math.random() * 20,
            });
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        // ctx ? ctx.strokeStyle = "#00E5FF" : null;

        let mouseMoved = false;

        const pointer = {
            x: .5 * window.innerWidth,
            y: .5 * window.innerHeight,
        }
        const params = {
            pointsNumber: 40,
            widthFactor: .3,
            mouseThreshold: .6,
            spring: .4,
            friction: .5
        };

        const trail = new Array(params.pointsNumber);
        for (let i = 0; i < params.pointsNumber; i++) {
            trail[i] = {
                x: pointer.x,
                y: pointer.y,
                dx: 0,
                dy: 0,
            }
        }

        function updateMousePosition(eX: number, eY: number) {
            pointer.x = eX;
            pointer.y = eY;
        }

        function update(t: number) {

            if (!canvas || !ctx) {
                requestAnimationFrame(update);
                return;
            }
            // for intro motion
            if (!mouseMoved) {
                pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
                pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            trail.forEach((p, pIdx) => {
                const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
                const spring = pIdx === 0 ? .4 * params.spring : params.spring;
                p.dx += (prev.x - p.x) * spring;
                p.dy += (prev.y - p.y) * spring;
                p.dx *= params.friction;
                p.dy *= params.friction;
                p.x += p.dx;
                p.y += p.dy;
            });

            const primaryColor = getComputedStyle(document.documentElement)
                .getPropertyValue("--primary")
                .trim();
            ctx.strokeStyle = primaryColor;
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);

            for (let i = 1; i < trail.length - 1; i++) {
                const xc = .5 * (trail[i].x + trail[i + 1].x);
                const yc = .5 * (trail[i].y + trail[i + 1].y);
                ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
                ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
                ctx.stroke();
            }
            ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
            ctx.stroke();

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];

                p.x += p.dx;
                p.y += p.dy;

                p.dx *= 0.96;
                p.dy *= 0.96;

                p.life++;

                const alpha = 1 - p.life / p.maxLife;

                ctx.save();

                ctx.globalAlpha = alpha;
                ctx.fillStyle = primaryColor;
                ctx.shadowColor = primaryColor;
                ctx.shadowBlur = 15;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();

                if (p.life >= p.maxLife) {
                    particles.splice(i, 1);
                }
            }

            window.requestAnimationFrame(update);
        }

        function setupCanvas() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        setupCanvas();

        let animationId: number;
        animationId = requestAnimationFrame(update);

        const handleMouseMove = (e: MouseEvent) => {
            mouseMoved = true;
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleClick = (e: MouseEvent) => {
            updateMousePosition(e.clientX, e.clientY);
            createSpark(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            mouseMoved = true;
            updateMousePosition(
                e.targetTouches[0].clientX,
                e.targetTouches[0].clientY
            );
        };

        window.addEventListener("resize", setupCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            cancelAnimationFrame(animationId);

            window.removeEventListener("resize", setupCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return <canvas ref={canvasRef} />;
}