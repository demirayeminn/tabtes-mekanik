// Base prices for services
export const basePrices = {
  // New services
  "yangin-sprink": 15000,
  "kazan-dairesi": 10000,
  "kaskat-sistemler": 25000,
  "daire-tesisati": 3000,
  "isitma-sogutma": 5000,
  "ciller-gruplama": 30000,

  // Existing services
  "kombi-montaj": 3500,
  "kombi-bakim": 500,
  "su-tesisati": 2000,
  "kacak-tespiti": 800,
  "petek-temizleme": 200, // per radiator
  "banyo-tadilati": 15000,
  "acil-servis": 500,
  "diger": 1000,
};

// Multipliers
export const multipliers = {
  building: {
    apartman: 1.0,
    mustakil: 1.1,
    isyeri: 1.2,
  },
  urgency: {
    normal: 1.0,
    acil: 1.3,
  },
};

// Calculate price range
export function calculatePriceRange(
  service: string,
  details: Record<string, any>
): { min: number; max: number } {
  let basePrice = basePrices[service as keyof typeof basePrices] || 1000;

  // For petek temizleme, multiply by count
  if (service === "petek-temizleme" && details.petekSayisi) {
    basePrice = basePrice * parseInt(details.petekSayisi);
  }

  // Apply building multiplier
  const buildingMultiplier = details.binaType
    ? multipliers.building[
        details.binaType as keyof typeof multipliers.building
      ] || 1
    : 1;

  // Apply urgency multiplier
  const urgencyMultiplier = details.aciliyet
    ? multipliers.urgency[
        details.aciliyet as keyof typeof multipliers.urgency
      ] || 1
    : 1;

  const calculatedPrice = basePrice * buildingMultiplier * urgencyMultiplier;

  return {
    min: Math.round(calculatedPrice * 0.9),
    max: Math.round(calculatedPrice * 1.2),
  };
}
