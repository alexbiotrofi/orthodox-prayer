// Orthodox Calendar utilities
// Paschal (Easter) calculation using the Meeus algorithm for Julian calendar,
// then converted to Gregorian

export interface OrthodoxDay {
  name: string;
  type: 'great-feast' | 'feast' | 'fast' | 'regular';
  description?: string;
  color: string; // liturgical color hint
}

export interface TimeOfDay {
  period: 'morning' | 'midday' | 'afternoon' | 'evening' | 'night';
  label: string;
}

export function getTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 10) return { period: 'morning', label: 'Morning' };
  if (hour >= 10 && hour < 13) return { period: 'midday', label: 'Midday' };
  if (hour >= 13 && hour < 17) return { period: 'afternoon', label: 'Afternoon' };
  if (hour >= 17 && hour < 21) return { period: 'evening', label: 'Evening' };
  return { period: 'night', label: 'Night' };
}

// Calculate Orthodox Pascha (Easter) date for a given year
// Returns a Gregorian Date
export function calculatePascha(year: number): Date {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31); // Julian month (3=March, 4=April)
  const day = ((d + e + 114) % 31) + 1;

  // Convert Julian to Gregorian (add 13 days for 1900-2099)
  const julianDate = new Date(year, month - 1, day);
  julianDate.setDate(julianDate.getDate() + 13);
  return julianDate;
}

function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function daysBetween(a: Date, b: Date): number {
  const msPerDay = 86400000;
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((utcB - utcA) / msPerDay);
}

// Fixed feasts (New Calendar / Gregorian dates)
const FIXED_FEASTS: Record<string, { name: string; type: 'great-feast' | 'feast' }> = {
  '1-1': { name: 'Circumcision of Christ & St. Basil the Great', type: 'great-feast' },
  '1-6': { name: 'Holy Theophany (Epiphany)', type: 'great-feast' },
  '1-7': { name: 'Synaxis of St. John the Baptist', type: 'feast' },
  '2-2': { name: 'Presentation of Christ in the Temple', type: 'great-feast' },
  '3-25': { name: 'Annunciation of the Theotokos', type: 'great-feast' },
  '5-21': { name: 'Ss. Constantine & Helen', type: 'feast' },
  '6-24': { name: 'Nativity of St. John the Baptist', type: 'feast' },
  '6-29': { name: 'Ss. Peter & Paul', type: 'feast' },
  '6-30': { name: 'Synaxis of the Twelve Apostles', type: 'feast' },
  '7-17': { name: 'St. Marina the Great Martyr', type: 'feast' },
  '7-20': { name: 'Prophet Elijah', type: 'feast' },
  '8-6': { name: 'Transfiguration of Christ', type: 'great-feast' },
  '8-15': { name: 'Dormition of the Theotokos', type: 'great-feast' },
  '8-29': { name: 'Beheading of St. John the Baptist', type: 'feast' },
  '9-8': { name: 'Nativity of the Theotokos', type: 'great-feast' },
  '9-14': { name: 'Exaltation of the Holy Cross', type: 'great-feast' },
  '10-26': { name: 'St. Demetrios the Great Martyr', type: 'feast' },
  '11-8': { name: 'Archangels Michael & Gabriel', type: 'feast' },
  '11-21': { name: 'Presentation of the Theotokos', type: 'great-feast' },
  '11-25': { name: 'St. Catherine the Great Martyr', type: 'feast' },
  '11-30': { name: 'St. Andrew the Apostle', type: 'feast' },
  '12-4': { name: 'St. Barbara the Great Martyr', type: 'feast' },
  '12-6': { name: 'St. Nicholas the Wonderworker', type: 'feast' },
  '12-9': { name: 'Conception of the Theotokos by St. Anna', type: 'feast' },
  '12-12': { name: 'St. Spyridon the Wonderworker', type: 'feast' },
  '12-25': { name: 'Nativity of Christ (Christmas)', type: 'great-feast' },
  '12-26': { name: 'Synaxis of the Theotokos', type: 'feast' },
};

export function getOrthodoxDay(date: Date): OrthodoxDay {
  const year = date.getFullYear();
  const pascha = calculatePascha(year);
  const diff = daysBetween(pascha, date);

  // Moveable feasts relative to Pascha
  if (sameDay(date, pascha)) {
    return { name: 'Pascha (Easter) - The Resurrection of Christ', type: 'great-feast', color: 'red', description: 'Christ is Risen! The Feast of Feasts.' };
  }
  if (diff === -49) return { name: 'Sunday of the Publican & Pharisee', type: 'feast', color: 'purple' };
  if (diff === -42) return { name: 'Sunday of the Prodigal Son', type: 'feast', color: 'purple' };
  if (diff === -36) return { name: 'Saturday of Souls (Meatfare)', type: 'feast', color: 'purple' };
  if (diff === -35) return { name: 'Meatfare Sunday (Last Judgment)', type: 'feast', color: 'purple' };
  if (diff === -28) return { name: 'Cheesefare Sunday (Forgiveness Sunday)', type: 'feast', color: 'purple', description: 'Beginning of Great Lent tomorrow' };
  if (diff >= -27 && diff <= -22) return { name: 'Clean Week of Great Lent', type: 'fast', color: 'purple', description: 'First week of the Great Fast' };
  if (diff >= -48 && diff <= -8 && date.getDay() === 0) {
    const lentWeek = Math.floor((diff + 48) / 7) + 1;
    const sundayNames: Record<number, string> = {
      1: 'Sunday of Orthodoxy',
      2: 'St. Gregory Palamas Sunday',
      3: 'Sunday of the Holy Cross',
      4: 'St. John Climacus Sunday',
      5: 'St. Mary of Egypt Sunday',
    };
    if (sundayNames[lentWeek]) return { name: sundayNames[lentWeek], type: 'feast', color: 'purple' };
  }
  if (diff === -8) return { name: 'Lazarus Saturday', type: 'feast', color: 'gold' };
  if (diff === -7) return { name: 'Palm Sunday - Entry into Jerusalem', type: 'great-feast', color: 'green', description: 'The Lord enters Jerusalem' };
  if (diff === -6) return { name: 'Great & Holy Monday', type: 'fast', color: 'purple' };
  if (diff === -5) return { name: 'Great & Holy Tuesday', type: 'fast', color: 'purple' };
  if (diff === -4) return { name: 'Great & Holy Wednesday', type: 'fast', color: 'purple' };
  if (diff === -3) return { name: 'Great & Holy Thursday', type: 'fast', color: 'purple', description: 'The Mystical Supper' };
  if (diff === -2) return { name: 'Great & Holy Friday', type: 'fast', color: 'purple', description: 'The Crucifixion and Burial of Christ' };
  if (diff === -1) return { name: 'Great & Holy Saturday', type: 'fast', color: 'purple', description: 'The Descent into Hades' };
  if (diff >= 1 && diff <= 6) return { name: 'Bright Week', type: 'great-feast', color: 'red', description: 'The week of Pascha - no fasting!' };
  if (diff === 7) return { name: 'Thomas Sunday (Antipascha)', type: 'feast', color: 'red' };
  if (diff === 14) return { name: 'Sunday of the Myrrhbearing Women', type: 'feast', color: 'gold' };
  if (diff === 21) return { name: 'Sunday of the Paralytic', type: 'feast', color: 'gold' };
  if (diff === 24) return { name: 'Mid-Pentecost', type: 'feast', color: 'gold' };
  if (diff === 28) return { name: 'Sunday of the Samaritan Woman', type: 'feast', color: 'gold' };
  if (diff === 35) return { name: 'Sunday of the Blind Man', type: 'feast', color: 'gold' };
  if (diff === 39) return { name: 'Ascension of Christ', type: 'great-feast', color: 'white' };
  if (diff === 49) return { name: 'Pentecost - Descent of the Holy Spirit', type: 'great-feast', color: 'green', description: 'Birthday of the Church' };
  if (diff === 50) return { name: 'Holy Spirit Monday', type: 'great-feast', color: 'green' };
  if (diff === 56) return { name: 'All Saints Sunday', type: 'feast', color: 'gold' };

  // Clean Monday
  if (diff === -48) {
    return { name: 'Clean Monday', type: 'fast', color: 'purple', description: 'First day of Great Lent — strict fast' };
  }

  // Great Lent
  if (diff >= -48 && diff <= -7) {
    return { name: 'Great Lent', type: 'fast', color: 'purple', description: 'The Great Fast - a time of repentance and prayer' };
  }

  // Fixed feasts
  const key = `${date.getMonth() + 1}-${date.getDate()}`;
  const fixed = FIXED_FEASTS[key];
  if (fixed) {
    return { name: fixed.name, type: fixed.type, color: fixed.type === 'great-feast' ? 'gold' : 'blue' };
  }

  // Fasting periods (approximate)
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Apostles' Fast (day after All Saints to June 28)
  if (diff > 56) {
    const allSaints = new Date(pascha);
    allSaints.setDate(allSaints.getDate() + 56);
    const juneEnd = new Date(year, 5, 28); // June 28
    if (date > allSaints && date <= juneEnd) {
      return { name: 'Apostles\' Fast', type: 'fast', color: 'purple' };
    }
  }

  // Dormition Fast (Aug 1-14)
  if (month === 8 && day >= 1 && day <= 14) {
    return { name: 'Dormition Fast', type: 'fast', color: 'purple', description: 'Fast in preparation for the Dormition of the Theotokos' };
  }

  // Nativity Fast (Nov 15 - Dec 24)
  if ((month === 11 && day >= 15) || (month === 12 && day <= 24)) {
    return { name: 'Nativity Fast', type: 'fast', color: 'purple', description: 'Fast in preparation for the Nativity of Christ' };
  }

  // Regular Wednesday and Friday fasting
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 3 || dayOfWeek === 5) {
    // Check if in a fast-free week
    const isBrightWeek = diff >= 0 && diff <= 6;
    const isWeekAfterPentecost = diff >= 49 && diff <= 55;
    const isPublicanPhariseeWeek = diff >= -49 && diff <= -43;
    const isCheesfareWeek = diff >= -28 && diff <= -22;
    const isChristmasToTheophany = (month === 12 && day >= 25) || (month === 1 && day <= 4);
    const isWeekAfterTheophany = month === 1 && day >= 7 && day <= 13;
    if (!isBrightWeek && !isWeekAfterPentecost && !isPublicanPhariseeWeek && !isCheesfareWeek && !isChristmasToTheophany && !isWeekAfterTheophany) {
      return { name: dayOfWeek === 3 ? 'Wednesday Fast' : 'Friday Fast', type: 'fast', color: 'purple', description: 'Regular weekly fast day' };
    }
  }

  // Regular day - check if Sunday
  if (dayOfWeek === 0) {
    return { name: 'The Lord\'s Day', type: 'regular', color: 'gold' };
  }

  return { name: 'Ordinary Day', type: 'regular', color: 'blue' };
}

// Get the tone/week of the Octoechos (8-week cycle after Pentecost)
export function getOctoechosTone(date: Date): number {
  const pascha = calculatePascha(date.getFullYear());
  const diff = daysBetween(pascha, date);
  if (diff < 0) {
    // Before Pascha, use previous year's cycle
    const prevPascha = calculatePascha(date.getFullYear() - 1);
    const prevDiff = daysBetween(prevPascha, date);
    return ((Math.floor(prevDiff / 7) - 1) % 8) + 1;
  }
  return ((Math.floor(diff / 7)) % 8) + 1;
}
