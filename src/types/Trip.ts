export interface Location {
  name: string;
  coordinates: [number, number];
  googleMapsUrl?: string;
}

export interface Activity {
  time: string;
  description: string;
}

export interface Stop {
  name: string;
  type: string;
  googleMapsUrl?: string;
}

export interface SpecialActivity {
  name: string;
  address?: string;
  time?: string;
  description?: string;
  bookingReference?: string;
  website?: string;
  coordinates?: [number, number];
  imageUrl?: string;
}

export interface Accommodation {
  name: string;
  address: string;
  coordinates: [number, number];
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  price?: string;
  amenities?: string[];
  notes?: string[];
  googleMapsUrl?: string;
  imageUrl?: string;
}

export interface TripDay {
  id: number;
  date: string;
  dayNumber: number;
  startLocation: Location;
  endLocation: Location;
  distance?: string;
  duration?: string;
  activities: Activity[];
  stops: Stop[];
  accommodation: Accommodation;
  specialActivities?: SpecialActivity[];
  notes?: string[];
  googleMapsUrl?: string;
}

export interface Trip {
  name: string;
  startDate: string;
  endDate: string;
  days: TripDay[];
}