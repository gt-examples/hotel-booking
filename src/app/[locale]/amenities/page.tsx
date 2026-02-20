import { T } from "gt-next";
import { getGT } from "gt-next/server";
import Header from "@/components/Header";

const amenityCategories = [
  {
    title: "Wellness and Spa",
    items: [
      "Indoor heated swimming pool",
      "Full-service spa with treatment rooms",
      "Steam room and sauna",
      "Fitness center with modern equipment",
      "Yoga studio with daily classes",
    ],
  },
  {
    title: "Dining",
    items: [
      "Rooftop restaurant with panoramic views",
      "Lobby bar and lounge",
      "24-hour room service",
      "Complimentary breakfast for suite guests",
      "Private dining room for special occasions",
    ],
  },
  {
    title: "Business and Events",
    items: [
      "Executive business center",
      "Conference rooms with AV equipment",
      "High-speed Wi-Fi throughout the property",
      "Printing and copying services",
      "Private meeting rooms",
    ],
  },
  {
    title: "Guest Services",
    items: [
      "24-hour front desk and concierge",
      "Valet parking",
      "Airport shuttle service",
      "Luggage storage",
      "Laundry and dry cleaning",
      "Currency exchange",
    ],
  },
];

export default async function AmenitiesPage() {
  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-neutral-100 mb-3">
            {gt("Hotel Amenities")}
          </h1>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              Our hotel offers a comprehensive range of amenities designed to
              make your stay comfortable and memorable. From wellness facilities
              to fine dining, everything you need is at your fingertips.
            </T>
          </p>
        </div>

        {/* About the hotel */}
        <div className="border border-neutral-800 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("About the Hotel")}
          </h2>
          <div className="space-y-3 text-neutral-400 leading-relaxed">
            <p>
              <T>
                Situated in the heart of the city, our hotel combines modern
                elegance with warm hospitality. With six distinct room types
                ranging from our efficient Economy Single to the lavish
                Penthouse Suite, we cater to every kind of traveler.
              </T>
            </p>
            <p>
              <T>
                Originally built in 1928 and fully renovated in 2024, the
                property blends historic architectural character with
                contemporary design and technology. Our dedicated staff is
                available around the clock to ensure an exceptional experience.
              </T>
            </p>
          </div>
        </div>

        {/* Amenity categories */}
        <div className="grid gap-6">
          {amenityCategories.map((category) => (
            <div
              key={category.title}
              className="border border-neutral-800 rounded-lg p-6"
            >
              <h2 className="text-lg font-semibold text-neutral-100 mb-4">
                <T>{category.title}</T>
              </h2>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
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
                    <T>{item}</T>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-10 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("Contact and Location")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-400">
            <div>
              <p className="text-xs text-neutral-500 mb-1">
                <T>Address</T>
              </p>
              <p>
                <T>123 Grand Avenue, Downtown District</T>
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">
                <T>Phone</T>
              </p>
              <p>+1 (555) 234-5678</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">
                <T>Check-in time</T>
              </p>
              <p>
                <T>3:00 PM</T>
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">
                <T>Check-out time</T>
              </p>
              <p>
                <T>11:00 AM</T>
              </p>
            </div>
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
