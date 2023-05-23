const CURRENCY_FORMATTER = new Intl.NumberFormat("es-CR", {
    style: 'currency',
    currency: 'CRC',
    minimumFractionDigits: 0}
  );

export function formatPrice(price) {
    return CURRENCY_FORMATTER.format(price);
  }