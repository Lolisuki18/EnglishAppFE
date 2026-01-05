// Helper function - Format Date
export function formatDate(
  date: Date | string,
  locale: string = "vi-VN"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Helper function - Format Currency
export function formatCurrency(
  amount: number,
  currency: string = "VND"
): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: currency,
  }).format(amount);
}
