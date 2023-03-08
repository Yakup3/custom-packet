import LocalizedStrings from 'react-native-localization';

export const localStrings = new LocalizedStrings({
  'tr-TR': {
    beije: 'beije.',
    createOwnPacket: 'Kendi Paketini Oluştur',
    createOwnPacketDescription:
      'Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.',
    beijePad: 'beije Ped',
    beijeDailyPad: 'beije Günlük Ped',
    beijeTampon: 'beije Tampon',
    seePacket: 'Paketini Gör',
    standardPad: 'Standart Ped',
    superPad: 'Süper Ped',
    superPlusPad: 'Süper+ Ped',
    dailyPad: 'Günlük Ped',
    superDailyPad: 'Süper Günlük Ped',
    miniTampon: 'Mini Tampon',
    standardTampon: 'Standart Tampon',
    specialPacket: 'Özel Paketin',
    deliveryFrequency: '2 ayda 1 gönderim',
    padPackets: 'Ped Paketleri',
    tamponPackets: 'Tampon Paketleri',
    dailyPadPackets: 'Günlük Ped Paketleri',
    removeFromPacket: 'Paketten Çıkar',
    addToCart: (total: string) => `Sepete Ekle (₺${total})`,
  },
  en: {
    beije: 'beije.',
    createOwnPacket: 'Create Own Packet',
    createOwnPacketDescription:
      'Let us create a packet for you by selecting the products and quantities according to your preferences and needs.',
    beijePad: 'beije Pad',
    beijeDailyPad: 'beije Daily Pad',
    beijeTampon: 'beije Tampon',
    seePacket: 'See Packet',
    standardPad: 'Standard Pad',
    superPad: 'Super Pad',
    superPlusPad: 'Super+ Pad',
    dailyPad: 'Daily Pad',
    superDailyPad: 'Super Daily Pad',
    miniTampon: 'Mini Tampon',
    standardTampon: 'Standard Tampon',
    specialPacket: 'Your Special Packet',
    deliveryFrequency: '2 months 1 delivery',
    padPackets: 'Pad Packets',
    tamponPackets: 'Tampon Packets',
    dailyPadPackets: 'Daily Pad Packets',
    removeFromPacket: 'Remove From Packet',
    addToCart: (total: string) => `Add To Cart (₺${total})`,
  },
});

localStrings.setLanguage('tr');
