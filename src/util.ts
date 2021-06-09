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
    "OK": '#00a92a',
    "WRONG_ANSWER": '#ed4420',
    "TIME_LIMIT_EXCEEDED": '#a3bcbd',
    "MEMORY_LIMIT_EXCEEDED": '#0462c7',
    "IDLENESS_LIMIT_EXCEEDED": '#bf00a6',
    "RUNTIME_ERROR": '#ffa71c',
    "COMPILATION_ERROR": '#42586d',
};