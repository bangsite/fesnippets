export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const isEmpty = (value: string): boolean => value.trim().length === 0;

export const sum = (a: number, b: number): number => a + b;
