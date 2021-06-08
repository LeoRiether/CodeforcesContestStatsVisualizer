export const color = {
    hue(h: number): string {
        return `hsl(${h}, 60%, 50%)`
    },

    gray(l: number): string {
        return `hsl(0, 0%, ${l}%)`;
    },

    random() {
        return this.hue(Math.random() * 360);
    },
};

export const colorFor = {
    "OK": color.hue(111),
    "WRONG_ANSWER": color.hue(0),
    "TIME_LIMIT_EXCEEDED": color.hue(59),
    "MEMORY_LIMIT_EXCEEDED": color.hue(315),
    "IDLENESS_LIMIT_EXCEEDED": color.hue(75),
    "RUNTIME_ERROR": color.hue(22),
    "COMPILATION_ERROR": color.gray(60),
};