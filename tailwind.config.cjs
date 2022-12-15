/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        backgroundImage: {
            "gradient-background": "radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
            "rock-gradient": "linear-gradient(to left, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
            "paper-gradient": "linear-gradient(to left, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
            "scissors-gradient": "linear-gradient(to left, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
            "lizard-gradient": "linear-gradient(to left, hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
            "spock-gradient": "linear-gradient(to left, hsl(189, 59%, 53%), hsl(189, 58%, 57%))"
        },
        fontFamily: {
            body: ["Barlow Semi Condensed", "sans-serif"]
        },
        extend: {
            colors: {
                "dark-text": "hsl(229, 25%, 31%)",
                "score-text": "hsl(229, 64%, 46%)",
                "header-outline": "hsl(217, 16%, 45%)"
            },
            keyframes: {
                pulseOpacity: {
                    "0%": {
                        opacity: 0.15
                    },
                    "70%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 0
                    }
                },
                pulseScale: {
                    "0%": {
                        transform: `scale(1.0)`
                    },
                    "70%": {
                        transform: `scale(1.1)`
                    },
                    "100%": {
                        transform: `scale(1.0)`
                    }
                }
            },
            animation: {
                pulseOpacity: "pulseOpacity 1250ms infinite",
                pulseScale: "pulseScale 1250ms infinite",
                pulseBoth: "pulseOpacity 1250ms infinite, pulseScale 1250ms infinite"
            }
        }
    },
    plugins: []
};
