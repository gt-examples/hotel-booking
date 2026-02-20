import { T, Num, Currency, DateTime, Branch, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { rooms, getRoomBySlug } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
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

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {gt("Back to rooms")}
        </Link>

        {/* Photo placeholder */}
        <div className="aspect-[16/9] rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8">
          <div className="text-center text-neutral-600">
            <svg className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">
              <T>Room photos</T>
            </p>
          </div>
        </div>

        {/* Room header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-100 mb-2">
              <T>{room.name}</T>
            </h1>
            <div className="flex items-center gap-3">
              <StarRating stars={room.stars} />
              <span className="text-sm text-neutral-500">
                <T>
                  <Num>{room.sqft}</Num> sq ft
                </T>
              </span>
              <span
                className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                  room.available
                    ? "bg-emerald-900/40 text-emerald-400"
                    : "bg-red-900/40 text-red-400"
                }`}
              >
                <T>
                  <Branch
                    branch={room.available ? "yes" : "no"}
                    yes="Available"
                    no="Fully Booked"
                  />
                </T>
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-neutral-100">
              <Currency currency={room.currency}>{room.rate}</Currency>
            </span>
            <span className="text-sm text-neutral-500">
              <T> / night</T>
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("About this room")}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            <T>{room.longDescription}</T>
          </p>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Guests</T>
            </p>
            <p className="text-lg font-semibold text-neutral-100">
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
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Beds</T>
            </p>
            <p className="text-lg font-semibold text-neutral-100">
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
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Check-in</T>
            </p>
            <p className="text-sm font-medium text-neutral-100">
              <DateTime options={{ dateStyle: "medium" }}>
                {new Date(room.checkIn)}
              </DateTime>
            </p>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-xs text-neutral-500 mb-1">
              <T>Check-out</T>
            </p>
            <p className="text-sm font-medium text-neutral-100">
              <DateTime options={{ dateStyle: "medium" }}>
                {new Date(room.checkOut)}
              </DateTime>
            </p>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("Room amenities")}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {room.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 text-sm text-neutral-400"
              >
                <svg
                  className="h-4 w-4 text-emerald-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <T>{amenity}</T>
              </div>
            ))}
          </div>
        </div>

        {/* Booking section */}
        <div className="border border-neutral-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-neutral-100 mb-4">
            {gt("Book this room")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs text-neutral-500 mb-1">
                <T>Check-in date</T>
              </label>
              <div className="border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-300 bg-neutral-900">
                <DateTime options={{ dateStyle: "long" }}>
                  {new Date(room.checkIn)}
                </DateTime>
              </div>
            </div>
            <div>
              <label className="block text-xs text-neutral-500 mb-1">
                <T>Check-out date</T>
              </label>
              <div className="border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-300 bg-neutral-900">
                <DateTime options={{ dateStyle: "long" }}>
                  {new Date(room.checkOut)}
                </DateTime>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
            <div>
              <p className="text-xs text-neutral-500">
                <T>Total estimated</T>
              </p>
              <p className="text-xl font-bold text-neutral-100">
                <Currency currency={room.currency}>
                  {room.rate *
                    Math.round(
                      (new Date(room.checkOut).getTime() -
                        new Date(room.checkIn).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}
                </Currency>
              </p>
            </div>
            <button
              disabled={!room.available}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                room.available
                  ? "bg-white text-neutral-900 hover:bg-neutral-200"
                  : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
              }`}
            >
              <T>
                <Branch
                  branch={room.available ? "yes" : "no"}
                  yes="Reserve now"
                  no="Unavailable"
                />
              </T>
            </button>
          </div>
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
