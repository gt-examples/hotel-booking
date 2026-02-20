import { T, Num, Currency, DateTime, Branch, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

type Room = {
  id: number;
  name: string;
  description: string;
  rate: number;
  currency: string;
  guests: number;
  beds: number;
  sqft: number;
  stars: number;
  available: boolean;
  checkIn: string;
  checkOut: string;
};

const rooms: Room[] = [
  {
    id: 1,
    name: "Standard Queen",
    description:
      "A comfortable room with a queen-size bed, work desk, and city view.",
    rate: 129,
    currency: "USD",
    guests: 2,
    beds: 1,
    sqft: 320,
    stars: 3,
    available: true,
    checkIn: "2026-03-15T15:00:00",
    checkOut: "2026-03-18T11:00:00",
  },
  {
    id: 2,
    name: "Deluxe King Suite",
    description:
      "Spacious suite with a king bed, separate living area, and panoramic windows.",
    rate: 279,
    currency: "USD",
    guests: 2,
    beds: 1,
    sqft: 550,
    stars: 4,
    available: true,
    checkIn: "2026-03-20T15:00:00",
    checkOut: "2026-03-23T11:00:00",
  },
  {
    id: 3,
    name: "Family Room",
    description:
      "Two double beds with a connecting door option, ideal for families traveling with children.",
    rate: 199,
    currency: "USD",
    guests: 4,
    beds: 2,
    sqft: 450,
    stars: 3,
    available: false,
    checkIn: "2026-04-01T15:00:00",
    checkOut: "2026-04-05T11:00:00",
  },
  {
    id: 4,
    name: "Executive Suite",
    description:
      "Premium corner suite with a marble bathroom, minibar, and dedicated concierge service.",
    rate: 459,
    currency: "USD",
    guests: 2,
    beds: 1,
    sqft: 720,
    stars: 5,
    available: true,
    checkIn: "2026-03-10T15:00:00",
    checkOut: "2026-03-14T11:00:00",
  },
  {
    id: 5,
    name: "Economy Single",
    description:
      "Compact and affordable room with a single bed, perfect for solo travelers on a budget.",
    rate: 79,
    currency: "USD",
    guests: 1,
    beds: 1,
    sqft: 200,
    stars: 2,
    available: true,
    checkIn: "2026-03-25T15:00:00",
    checkOut: "2026-03-27T11:00:00",
  },
  {
    id: 6,
    name: "Penthouse Suite",
    description:
      "Top-floor luxury with a private terrace, whirlpool bath, and butler service included.",
    rate: 899,
    currency: "USD",
    guests: 4,
    beds: 2,
    sqft: 1200,
    stars: 5,
    available: false,
    checkIn: "2026-05-01T15:00:00",
    checkOut: "2026-05-07T11:00:00",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${
            i < stars ? "text-amber-400" : "text-neutral-700"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AvailabilityBadge({ available }: { available: boolean }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
        available
          ? "bg-emerald-900/40 text-emerald-400"
          : "bg-red-900/40 text-red-400"
      }`}
    >
      <T>
        <Branch
          branch={available ? "yes" : "no"}
          yes="Available"
          no="Fully Booked"
        />
      </T>
    </span>
  );
}

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-neutral-100 leading-tight">
            <T>{room.name}</T>
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            <T>{room.description}</T>
          </p>
        </div>
        <AvailabilityBadge available={room.available} />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <StarRating stars={room.stars} />
        <span className="text-xs text-neutral-500">
          <T>
            <Num>{room.sqft}</Num> sq ft
          </T>
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-3">
        <span className="text-lg font-bold text-neutral-100">
          <Currency currency={room.currency}>{room.rate}</Currency>
          <span className="text-sm font-normal text-neutral-500">
            <T> / night</T>
          </span>
        </span>
        <span className="text-neutral-400">
          <T>
            <Plural
              n={room.guests}
              one={
                <>
                  <Num>{room.guests}</Num> guest
                </>
              }
              other={
                <>
                  <Num>{room.guests}</Num> guests
                </>
              }
            />
          </T>
        </span>
        <span className="text-neutral-400">
          <T>
            <Plural
              n={room.beds}
              one={
                <>
                  <Num>{room.beds}</Num> bed
                </>
              }
              other={
                <>
                  <Num>{room.beds}</Num> beds
                </>
              }
            />
          </T>
        </span>
      </div>

      <div className="pt-3 border-t border-neutral-800 flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500">
        <span>
          <T>
            Check-in: <DateTime options={{ dateStyle: "medium", timeStyle: "short" }}>{new Date(room.checkIn)}</DateTime>
          </T>
        </span>
        <span>
          <T>
            Check-out: <DateTime options={{ dateStyle: "medium", timeStyle: "short" }}>{new Date(room.checkOut)}</DateTime>
          </T>
        </span>
      </div>
    </div>
  );
}

export default async function Home() {
  const gt = await getGT();
  const totalRooms = rooms.length;
  const availableRooms = rooms.filter((r) => r.available).length;

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Hotel Booking")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/hotel-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            {gt("Browse rooms")}
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              Explore our selection of rooms and suites. Nightly rates, guest
              capacity, check-in dates, and availability are all displayed with
              locale-aware formatting powered by General Translation.
            </T>
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8 text-sm text-neutral-400">
          <span>
            <T>
              <Num>{totalRooms}</Num> rooms listed
            </T>
          </span>
          <span className="text-neutral-700">|</span>
          <span>
            <T>
              <Num>{availableRooms}</Num> currently available
            </T>
          </span>
        </div>

        <div className="grid gap-4">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-xs text-neutral-500">
            <T>
              This is an example application built with General Translation to
              demonstrate internationalization in Next.js.
            </T>
          </p>
        </footer>
      </main>
    </div>
  );
}
