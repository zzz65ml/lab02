export default {
    // 步骤1.2保留的模板路径配置
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            // 步骤4.1保留的自定义阴影shadow-sp
            boxShadow: {
                'sp': '0 3px 12px 0 rgba(0, 0, 0, 0.2)',
            },
            // 步骤7：新增sans字体扩展，指定字体族为Avenir/Helvetica/Arial/sans-serif
            fontFamily: {
                sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
            },
            // 步骤10.1：新增动画配置（animate-fade）与关键帧（yellowFade）
            animation: {
                fade: 'yellowFade 3s ease-in-out',
            },
            keyframes: {
                yellowFade: {
                    '0%': { backgroundColor: 'yellow' },
                    '100%': { backgroundColor: 'transparent' },
                },
            },
        },
    },
    plugins: [],
}