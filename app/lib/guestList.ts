// Guest list for the wedding
// Add your guests here with their IDs
export interface Guest {
  name: string;
  greeting?: string; // Optional custom greeting message
}

export const guestList: Record<string, Guest> = {
  'x7k2': {
    name: 'Diana',
    greeting: 'The Cadentia Gang'
  },
  'p9m5': {
    name: 'Sesh',
    greeting: 'Always smiling and a great cook'
  },
  'w3n8': {
    name: 'Cal',
    greeting: 'The sassy workmate who carried me through the drama'
  },
  'q6j4': {
    name: 'Veb & Vilja',
    greeting: 'My dearest couple friends'
  },
  'r2h7': {
    name: 'Hugo',
    greeting: 'My French Darling'
  },
  't1l9': {
    name: 'Aitor & Roger',
    greeting: 'From one long distance story to another'
  },
  'm4c3': {
    name: 'Margot',
    greeting: 'Or "Ma go", my funniest workmate'
  },
  's5b2': {
    name: 'Bitch Aloka',
    greeting: 'My biggest disappointment, and my dearest friend'
  },
  'd8f6': {
    name: 'Dhruv & Daniela',
  },
  'z4i5': {
    name: 'Kim',
    greeting: 'My Dear Habibi'
  },
  'a0z9': {
    name: 'Hammad',
    greeting: 'My True Habibi'
  },
  'jp96': {
    name: 'Quynh Anh',
    greeting: 'Who always smiles at my bland jokes and somehow thinks I’m funny'
  },
  'tc97': {
    name: 'Tra & Canh',
    greeting: 'Always a source of inspiration. You’ve set the bar pretty high for what a loving relationship looks like'
  },
  'er97': {
    name: 'Enric',
    greeting: 'You were part of making this happen'
  },
  'hh2k': {
    name: 'Hao',
    greeting: 'A smiley soul that carries sunlight through the Nordic winter'
  },
  'an00': {
    name: "Anoop & Your Loved One",
    // greeting: 'A mysterious duo'
  },
  'ka38': {
    name: 'Kai',
    greeting: 'My friend and my mentor - thank you for always listening.'
  },
  'maplesyrup': {
    name: 'Giang'
  },
  'tt24': {
    name: 'Tatu',
    greeting: 'To a true jazz soul and the coolest boss around'
  },
  'ttdl': {
    name: 'Thảo',
  },
  // Add more guests as needed
  // Format: 'shortid': { name: 'Name', greeting: 'Optional custom message' }
};

export function getGuest(id: string): Guest | null {
  return guestList[id] || null;
}

export function getGuestName(id: string): string {
  const guest = guestList[id];
  return guest?.name || 'Friend';
}
