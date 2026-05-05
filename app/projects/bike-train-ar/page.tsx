import { Header } from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";
import Image from "next/image";
import { buildProjectMetadata } from "@/lib/project-metadata";

export const metadata = buildProjectMetadata("bike-train-ar");

const HeroSlides = [
  {
    title: "Bike Train AR",
    subtitle: "Safe Routes, Stronger Communities",
    description:
      "The Bike Train Map Builder helps schools, neighborhoods, and organizers create, share, and manage safe bike routes for students and families. A project of Arkansas Moves built for better mobility across the state.",
    backgroundImage: "/images/bike-train-ar/bike-train-ar-homepage.jpg",
    button: {
      text: "Visit Bike Train AR",
      href: "https://biketrainar.com/",
    },
  },
];

const ShowcaseImages = [
  {
    src: "/images/bike-train-ar/children-and-parents-202603301458.webp",
    alt: "Children and parents biking together in a community bike train",
    title: "Ride together",
    description:
      "A bike train is a group of students and adults who ride together along a set route to school, picking up riders at designated stops along the way.",
  },
  {
    src: "/images/bike-train-ar/crossing-guard-with-202603301536.webp",
    alt: "Crossing guard helping children bike safely through an intersection",
    title: "Safer travel",
    description:
      "There is safety in numbers. Kids riding together with adult leaders are more visible and more protected on the way to school.",
  },
  {
    src: "/images/bike-train-ar/children-and-parents-202603301513.webp",
    alt: "Parents and children arriving at school by bike",
    title: "Consistent schedules",
    description:
      "Published routes with pickup times mean parents and kids know exactly when and where to meet—every ride, every week.",
  },
  {
    src: "/images/bike-train-ar/children-and-parents-202603301506-2.webp",
    alt: "Happy children and parents biking together",
    title: "Stronger community",
    description:
      "Bike trains build friendships, encourage physical activity, and reduce car traffic around schools.",
  },
];

export default function BikeTrainArPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <HeroCarousel slides={HeroSlides} />

        {/* What We Did */}
        <section className="relative py-16 md:py-32">
          <FuturisticBackground
            pattern="flowing"
            intensity="moderate"
            showOrbs={false}
            primaryColor="#fc05b9"
            secondaryColor="#4E79A7"
            tertiaryColor="#84596c"
            lineCount={10}
          />
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  What we did for Bike Train AR
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
                  Schools and neighborhoods know that biking to school is safer
                  and healthier when kids ride together—but coordinating it has
                  always been the hard part. Bike Train AR started from a simple
                  question:{" "}
                  <span className="text-[#4E79A7]">
                    what if any parent, teacher, or community organizer could
                    plan a safe bike route in minutes and share it with the
                    families who need it?
                  </span>
                </p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  We built the Bike Train Map Builder for{" "}
                  <a
                    href="https://arkansasmoves.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4E79A7] hover:underline"
                  >
                    Arkansas Moves
                  </a>{" "}
                  so anyone can drop pins, draw paths, and snap routes to real
                  roads on an interactive map. Routes can be shared inside a
                  group or made public with a single click—so families can view
                  stops, pickup times, and safety notes without ever creating an
                  account.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Better mobility, simpler tools
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Bike Train AR is built for parents, teachers, school
                    administrators, and community organizers across Arkansas. It
                    turns the idea of a “walking school bus, but on bikes” into
                    a planning tool anyone can use—safer travel, consistent
                    schedules, and stronger community connections, all in one
                    map.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Groups make it easy to organize a school, neighborhood, or
                    bike train team. Public sharing means a single link is all a
                    family needs to see the route, the stops, and when to be
                    there.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Deliverables
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Interactive map builder for safe bike routes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Stop details, pickup times, and per-stop safety notes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Group management for schools and neighborhoods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Visibility controls: private, group, or fully public
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Shareable public map viewer that needs no account
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* What is a bike train */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  What is a Bike Train?
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  A group of students and adults riding together along a set
                  route to school, picking up riders at designated stops along
                  the way—safer, more consistent, and more fun than going it
                  alone.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {ShowcaseImages.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-[#3F395B]/30 rounded-xl overflow-hidden border border-[#4E79A7]/30 hover:border-[#4E79A7] transition-all duration-300"
                  >
                    <div className="relative aspect-video bg-slate-800">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#CFC8CF] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* How it works */}
        <section className="relative py-16 md:py-32">
          <FuturisticBackground
            pattern="flowing"
            intensity="moderate"
            showOrbs={false}
            primaryColor="#fc05b9"
            secondaryColor="#4E79A7"
            tertiaryColor="#84596c"
            lineCount={10}
          />
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  How it works
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Simple as riding a bike. Sign up, create a group for your
                  school or neighborhood, build a route on the map, and share
                  it.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <div className="text-3xl font-bold text-[#4E79A7] mb-3">1</div>
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Sign up
                  </h3>
                  <p className="text-gray-300">
                    Create a free account in seconds—no setup fees, no contract.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <div className="text-3xl font-bold text-[#4E79A7] mb-3">2</div>
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Create a group
                  </h3>
                  <p className="text-gray-300">
                    Add your school, neighborhood, or team and invite the
                    parents, teachers, and organizers who need access.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <div className="text-3xl font-bold text-[#4E79A7] mb-3">3</div>
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Build your route
                  </h3>
                  <p className="text-gray-300">
                    Use the map to plot stops, draw safe paths, and add pickup
                    times and safety notes for each stop.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <div className="text-3xl font-bold text-[#4E79A7] mb-3">4</div>
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Share it
                  </h3>
                  <p className="text-gray-300">
                    Publish a public link or share inside your group—families
                    can view routes without creating an account.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* The Build / Tech Stack */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  The Build: Modern, Map-First Web App
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Behind the simple interface is a modern, type-safe stack
                  designed to make interactive maps, group workflows, and
                  shareable routes feel effortless for non-technical users.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Built for parents, not for engineers
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    The app is built on{" "}
                    <span className="text-[#4E79A7]">Next.js 16</span> with the
                    App Router and TypeScript end-to-end. The interactive map
                    builder uses{" "}
                    <span className="text-[#4E79A7]">Mapbox GL JS</span> for
                    pin-dropping, route drawing, geocoding search, and
                    auto-snapping routes to real roads.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Authentication runs on{" "}
                    <span className="text-[#4E79A7]">Auth.js v5</span> with
                    email and password credentials, while{" "}
                    <span className="text-[#4E79A7]">MongoDB</span> and Mongoose
                    store users, groups, maps, and invites. Forms across the app
                    use{" "}
                    <span className="text-[#4E79A7]">React Hook Form</span> and{" "}
                    <span className="text-[#4E79A7]">Zod</span> for validation,
                    and the UI is styled with{" "}
                    <span className="text-[#4E79A7]">Tailwind CSS 4</span>.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Transactional emails—group invites, welcome messages,
                    password resets, and support form receipts—are sent through{" "}
                    <span className="text-[#4E79A7]">SendGrid</span>, and avatar
                    uploads can use{" "}
                    <span className="text-[#4E79A7]">DigitalOcean Spaces</span>{" "}
                    for storage.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Tech Stack
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        <span className="font-semibold">Next.js 16</span> (App
                        Router, TypeScript) and{" "}
                        <span className="font-semibold">Tailwind CSS 4</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        <span className="font-semibold">Mapbox GL JS</span> for
                        interactive maps, geocoding, and directions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        <span className="font-semibold">Auth.js v5</span> with
                        email/password credentials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        <span className="font-semibold">MongoDB</span> with
                        Mongoose models for users, groups, maps, and invites
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        <span className="font-semibold">React Hook Form</span> +{" "}
                        <span className="font-semibold">Zod</span> for forms and
                        validation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        <span className="font-semibold">SendGrid</span> for
                        invites, welcome, password reset, and support emails
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Containerized with Docker; deployed on{" "}
                        <span className="font-semibold">
                          DigitalOcean App Platform
                        </span>{" "}
                        with Spaces for asset storage
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Map-first architecture
                  </h3>
                  <p className="text-gray-300">
                    Mapbox GL JS powers the route builder and viewer—drop pins,
                    draw paths, and snap routes to real roads. Geocoding lets
                    organizers add stops by searching real addresses.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Groups & visibility
                  </h3>
                  <p className="text-gray-300">
                    Groups, invites, and per-map visibility (private, group, or
                    public) are modeled in MongoDB, so each route can be shared
                    with exactly the right audience.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Public viewer
                  </h3>
                  <p className="text-gray-300">
                    A dedicated public map route at{" "}
                    <code className="text-[#4E79A7]">/map/[slug]</code> lets
                    anyone view stops and schedules without an account—perfect
                    for school newsletters and group chats.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="relative py-16 md:py-32">
          <FuturisticBackground
            pattern="flowing"
            intensity="moderate"
            showOrbs={false}
            primaryColor="#fc05b9"
            secondaryColor="#4E79A7"
            tertiaryColor="#84596c"
            lineCount={10}
          />
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Better Mobility for Arkansas Communities
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Bike Train AR is a project of{" "}
                  <a
                    href="https://arkansasmoves.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4E79A7] hover:underline"
                  >
                    Arkansas Moves
                  </a>
                  , working to improve active mobility across the state. Whether
                  you&apos;re a parent, teacher, school administrator, or
                  community organizer, you can help make biking to school safer
                  and more accessible.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  It takes about five minutes to set up a safe bike route for
                  your school or neighborhood—and once it&apos;s published, you
                  can share it with everyone who needs it.
                </p>
              </div>
            </ContentReveal>
          </div>
        </section>

        <ProjectHelpCTA />
        <Footer />
      </main>
    </>
  );
}
