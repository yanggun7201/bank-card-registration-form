const breakpoints = {
    sizes: {
        'xxs': 0,
        'xs': 368,
        'sm': 640,
        'md': 768,
        'lg': 1024,
        'xl': 1280,
        'xxl': 1440,
        '3xl': 1600,
        '4xl': 1900,
        '5xl': 2200,
    },
    order: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
        '3xl',
        '4xl',
        '5xl'
    ],
};


type BreakpointSize = keyof typeof breakpoints.sizes;

export const getNextBreakpoint = (size: string) => breakpoints.order[breakpoints.order.indexOf(size) + 1];
const getBreakpointMin = (size: BreakpointSize) => breakpoints.sizes[size];
const getBreakpointMax = (size: string) => breakpoints.sizes[getNextBreakpoint(size) as BreakpointSize] - .02;

export const breakpointOnly = (size: BreakpointSize) => {
    const min = getBreakpointMin(size);
    const max = getBreakpointMax(size);
    return `@media (min-width: ${min}px)${max ? ` and (max-width: ${max}px)` : ""}`;
};

export const breakpointUp = (size: BreakpointSize) => `@media (min-width: ${getBreakpointMin(size)}px)`;

export const breakpointDown = (size: BreakpointSize) => {
    const max = getBreakpointMax(size);
    return max ? `@media (max-width: ${max}px)` : `@media (min-width: 0)`;
};

export const breakpointBetween = (low: BreakpointSize, high: BreakpointSize) => {
    const min = getBreakpointMin(low);
    const max = getBreakpointMax(high);

    return `@media (min-width: ${min}px) ${max ? ` and (max-width: ${max}px)` : ""}`;
};

export default {
    ...breakpoints,
    only: breakpointOnly,
    between: breakpointBetween,
    up: breakpointUp,
    down: breakpointDown,
};
