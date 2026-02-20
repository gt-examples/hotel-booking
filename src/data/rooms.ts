export type Room = {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  rate: number;
  currency: string;
  guests: number;
  beds: number;
  sqft: number;
  stars: number;
  available: boolean;
  checkIn: string;
  checkOut: string;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    id: 1,
    slug: "standard-queen",
    name: "Standard Queen",
    description:
      "A comfortable room with a queen-size bed, work desk, and city view.",
    longDescription:
      "Our Standard Queen room offers a relaxing retreat with a plush queen-size bed, a spacious work desk for business travelers, and floor-to-ceiling windows framing a stunning city view. The room features a modern en-suite bathroom with rainfall shower, complimentary high-speed Wi-Fi, and a flat-screen television with streaming services. Ideal for couples or solo travelers seeking comfort at a great value.",
    rate: 129,
    currency: "USD",
    guests: 2,
    beds: 1,
    sqft: 320,
    stars: 3,
    available: true,
    checkIn: "2026-03-15T15:00:00",
    checkOut: "2026-03-18T11:00:00",
    amenities: [
      "Free Wi-Fi",
      "City view",
      "Work desk",
      "Rainfall shower",
      "Flat-screen TV",
      "Room service",
    ],
  },
  {
    id: 2,
    slug: "deluxe-king-suite",
    name: "Deluxe King Suite",
    description:
      "Spacious suite with a king bed, separate living area, and panoramic windows.",
    longDescription:
      "The Deluxe King Suite is designed for guests who appreciate generous space and refined comfort. Featuring a luxurious king-size bed with premium linens, a separate living area with a sofa and armchair, and panoramic windows offering sweeping views of the skyline. The marble bathroom includes a deep soaking tub and a walk-in rain shower. A minibar and Nespresso machine are included for your convenience.",
    rate: 279,
    currency: "USD",
    guests: 2,
    beds: 1,
    sqft: 550,
    stars: 4,
    available: true,
    checkIn: "2026-03-20T15:00:00",
    checkOut: "2026-03-23T11:00:00",
    amenities: [
      "Free Wi-Fi",
      "Panoramic view",
      "Separate living area",
      "Soaking tub",
      "Minibar",
      "Nespresso machine",
      "Room service",
    ],
  },
  {
    id: 3,
    slug: "family-room",
    name: "Family Room",
    description:
      "Two double beds with a connecting door option, ideal for families traveling with children.",
    longDescription:
      "Our Family Room is thoughtfully designed for families, featuring two comfortable double beds with premium mattresses and a connecting door option to an adjacent room. The spacious layout provides ample room for luggage and play, while the en-suite bathroom includes both a bathtub and shower. A mini-fridge and microwave are available for snacks and beverages, and complimentary cribs can be arranged upon request.",
    rate: 199,
    currency: "USD",
    guests: 4,
    beds: 2,
    sqft: 450,
    stars: 3,
    available: false,
    checkIn: "2026-04-01T15:00:00",
    checkOut: "2026-04-05T11:00:00",
    amenities: [
      "Free Wi-Fi",
      "Connecting room option",
      "Mini-fridge",
      "Microwave",
      "Bathtub",
      "Crib available",
      "Flat-screen TV",
    ],
  },
  {
    id: 4,
    slug: "executive-suite",
    name: "Executive Suite",
    description:
      "Premium corner suite with a marble bathroom, minibar, and dedicated concierge service.",
    longDescription:
      "The Executive Suite occupies a prime corner position, offering dual-aspect views through floor-to-ceiling windows. This premium suite features a king-size bed, a dedicated workspace with ergonomic chair, and an elegant sitting area. The marble bathroom boasts a whirlpool tub, separate rain shower, and heated floors. Guests enjoy access to the Executive Lounge with complimentary breakfast and evening cocktails, as well as a dedicated concierge for personalized service.",
    rate: 459,
    currency: "USD",
    guests: 2,
    beds: 1,
    sqft: 720,
    stars: 5,
    available: true,
    checkIn: "2026-03-10T15:00:00",
    checkOut: "2026-03-14T11:00:00",
    amenities: [
      "Free Wi-Fi",
      "Corner views",
      "Executive Lounge access",
      "Whirlpool tub",
      "Heated floors",
      "Dedicated concierge",
      "Ergonomic workspace",
      "Minibar",
    ],
  },
  {
    id: 5,
    slug: "economy-single",
    name: "Economy Single",
    description:
      "Compact and affordable room with a single bed, perfect for solo travelers on a budget.",
    longDescription:
      "The Economy Single is a smart, well-designed room that maximizes comfort in a compact space. Featuring a single bed with a quality mattress, a wall-mounted desk, and an efficient en-suite shower room. Despite its smaller footprint, the room includes all the essentials: complimentary Wi-Fi, a flat-screen TV, blackout curtains, and individual climate control. A perfect choice for solo travelers or short business stays.",
    rate: 79,
    currency: "USD",
    guests: 1,
    beds: 1,
    sqft: 200,
    stars: 2,
    available: true,
    checkIn: "2026-03-25T15:00:00",
    checkOut: "2026-03-27T11:00:00",
    amenities: [
      "Free Wi-Fi",
      "Flat-screen TV",
      "Blackout curtains",
      "Climate control",
      "En-suite shower",
    ],
  },
  {
    id: 6,
    slug: "penthouse-suite",
    name: "Penthouse Suite",
    description:
      "Top-floor luxury with a private terrace, whirlpool bath, and butler service included.",
    longDescription:
      "The Penthouse Suite is the pinnacle of luxury at our hotel, occupying the entire top floor with breathtaking 360-degree views. This expansive suite features a master bedroom with a king-size bed, a separate living and dining area, and a private wraparound terrace. The spa-inspired bathroom includes a whirlpool bath, steam shower, and dual vanities. A personal butler is available around the clock, and guests receive complimentary airport transfers and access to all hotel facilities.",
    rate: 899,
    currency: "USD",
    guests: 4,
    beds: 2,
    sqft: 1200,
    stars: 5,
    available: false,
    checkIn: "2026-05-01T15:00:00",
    checkOut: "2026-05-07T11:00:00",
    amenities: [
      "Free Wi-Fi",
      "Private terrace",
      "360-degree views",
      "Butler service",
      "Whirlpool bath",
      "Steam shower",
      "Airport transfers",
      "Dining area",
      "Minibar",
    ],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
