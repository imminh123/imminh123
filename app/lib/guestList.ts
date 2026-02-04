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
    name: 'Michael',
    greeting: 'Can\'t wait to share this special day with you!'
  },
  'r2h7': {
    name: 'Emily'
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
