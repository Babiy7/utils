export const sayHello = (name: string): string => {
  return `Привіт, ${name}!`;
}

export const convertToKebabCase = (
  sectionName?: string | null | undefined,
  separator?: string | null,
): string => {
  if (!sectionName?.trim()) return '';
  const sep = separator ?? '-';

  return sectionName
    .replace(/\s*-\s*/g, sep)
    .replace(/["']/g, '')
    .replace(/\s+/g, sep)
    .toLowerCase();
};

export const getFormattedTime = (date?: string): string => {
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const now: Date = date ? new Date(date) : new Date();

  if (isNaN(now.getTime())) return 'Invalid Date';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return now.toLocaleString('en-US', options).replace(/, /g, ' ');
};

export const toUpperFirstLetter = (text: string): string => {
  if (!text) {
    return '';
  }

  return text.replace(/\b\p{L}/gu, (char) => char.toUpperCase());
};

