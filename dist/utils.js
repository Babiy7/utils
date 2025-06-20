"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperFirstLetter = exports.getFormattedTime = exports.convertToKebabCase = exports.sayHello = void 0;
const sayHello = (name) => {
    return `Привіт, ${name}!`;
};
exports.sayHello = sayHello;
const convertToKebabCase = (sectionName, separator) => {
    if (!(sectionName === null || sectionName === void 0 ? void 0 : sectionName.trim()))
        return '';
    const sep = separator !== null && separator !== void 0 ? separator : '-';
    return sectionName
        .replace(/\s*-\s*/g, sep)
        .replace(/["']/g, '')
        .replace(/\s+/g, sep)
        .toLowerCase();
};
exports.convertToKebabCase = convertToKebabCase;
const getFormattedTime = (date) => {
    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    const now = date ? new Date(date) : new Date();
    if (isNaN(now.getTime()))
        return 'Invalid Date';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return now.toLocaleString('en-US', options).replace(/, /g, ' ');
};
exports.getFormattedTime = getFormattedTime;
const toUpperFirstLetter = (text) => {
    if (!text) {
        return '';
    }
    return text.replace(/\b\p{L}/gu, (char) => char.toUpperCase());
};
exports.toUpperFirstLetter = toUpperFirstLetter;
