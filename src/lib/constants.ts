export const WHATSAPP_NUMBER = '919847006295';
export const PHONE_NUMBERS = [
  { display: '+91 98470 06295', raw: '+919847006295' },
  { display: '+91 98470 06294', raw: '+919847006294' },
];
export const PHONE_DISPLAY = '+91 98470 06295';
export const PHONE_LINK = 'tel:+919847006295';
export const EMAIL = 'keralamist@gmail.com';
export const WORKING_HOURS = 'Mon – Sat, 9:00 AM – 8:00 PM IST';
export const ADDRESS = 'Marine Drive, Ernakulam, Kerala 682031';
export const INSTAGRAM_URL = 'https://instagram.com/keralamist';

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function getPackageWhatsAppLink(packageName: string): string {
  return getWhatsAppLink(
    `Hi! I'm interested in the "${packageName}" package. Could you share more details?`
  );
}

export function getQuoteWhatsAppLink(packageName: string): string {
  return getWhatsAppLink(
    `Hi! I'd like to get a quote for the "${packageName}" package. Can you help?`
  );
}
