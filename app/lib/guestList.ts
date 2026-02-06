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
    greeting: 'My French darling'
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
    name: 'Aloka',
    greeting: 'My biggest disappointment, and my dearest friend'
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
