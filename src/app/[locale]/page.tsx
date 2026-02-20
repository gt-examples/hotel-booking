import { T, Num, Currency, DateTime, Branch, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import Link from "next/link";
import Header from "@/components/Header";
import { rooms, Room } from "@/data/rooms";

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
    <Link
      href={`/room/${room.slug}`}
      className="block border border-neutral-800 rounded-lg p-5 hover:border-neutral-600 transition-colors"
    >
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
    </Link>
  );
}

export default async function Home() {
  const gt = await getGT();
  const totalRooms = rooms.length;
  const availableRooms = rooms.filter((r) => r.available).length;

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

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
