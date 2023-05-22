export function formatPrice(price) {
    if (typeof price === 'number') {
    return "₡ " + price.toLocaleString('es-ES', { minimumFractionDigits: 0 });
    }
    return "₡ ";
  }