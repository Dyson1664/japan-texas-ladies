import { CalendarDays, MapPin, Rocket, Handshake, BadgeHelp, User } from "lucide-react";

import japanDay01Group from "@/assets/japan-day01-groupbb.jpg";
import japanDay03Group from "@/assets/japan-day03-group.jpg";
import japanTokyo from "@/assets/japan-tokyo.jpg";
import japanDay06Nara from "@/assets/japan-day06-main-nara-deer-park.jpg";
import japanTea from "@/assets/japan-tea2.jpg";
import japanTorii from "@/assets/japan-torii.jpg";

import type { ComponentType, SVGProps } from "react";

type Tag = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
};

const tags: Tag[] = [
  { icon: Rocket, label: "Adventure" },
  { icon: Handshake, label: "Culture" },
  { icon: BadgeHelp, label: "Under 2 Weeks" },
  { icon: User, label: "Solo" },
];

const details = [
  { icon: CalendarDays, label: "13 days" },
  { icon: MapPin, label: "Tokyo - Kyoto", underlined: true },
];

export default function JapanAdventureDesktopCard() {
  return (
    <section className="mx-auto w-full max-w-[1560px] px-4 py-6 md:px-8 lg:px-10">
      <div className="mb-6 flex flex-col gap-5 xl:mb-8 xl:flex-row xl:items-start xl:justify-between xl:gap-8">
        <div>
          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-900 lg:text-6xl xl:text-7xl">
            Japan Adventure
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {tags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-base font-semibold text-teal-900"
              >
                <Icon className="h-4 w-4 text-teal-700" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-3xl font-semibold text-slate-800 lg:text-[38px]">
            {details.map(({ icon: Icon, label, underlined }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-6 w-6 text-slate-700 lg:h-7 lg:w-7" />
                <span className={underlined ? "underline decoration-2 underline-offset-4" : ""}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-[340px] pt-1 text-left xl:text-right">
          <p className="text-2xl text-slate-700 lg:text-3xl">
            From <span className="text-5xl font-extrabold text-slate-900 lg:text-6xl">€2,549</span> EUR
          </p>
          <button
            type="button"
            className="mt-5 rounded-full bg-[#FFA171] px-9 py-4 text-xl font-bold text-slate-900 transition hover:brightness-95 lg:text-2xl"
          >
            Check available start dates
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[34px] border-2 border-slate-200 bg-white p-1.5 shadow-sm">
        <div className="grid h-[700px] grid-cols-12 grid-rows-2 gap-1.5 bg-white">
          <img
            src={japanDay01Group}
            alt="Tokyo metro platform"
            className="col-span-3 row-span-2 h-full w-full rounded-[20px] object-cover"
          />
          <img
            src={japanDay03Group}
            alt="Group by a river in Japan"
            className="col-span-5 h-full w-full rounded-[20px] object-cover"
          />
          <img
            src={japanTokyo}
            alt="Traveler in Tokyo at night"
            className="col-span-4 h-full w-full rounded-[20px] object-cover"
          />
          <img
            src={japanDay06Nara}
            alt="Travelers in Japanese street"
            className="col-span-3 h-full w-full rounded-[20px] object-cover"
          />
          <img src={japanTea} alt="Tea ceremony class" className="col-span-3 h-full w-full rounded-[20px] object-cover" />
          <img
            src={japanTorii}
            alt="Orange Torii gates in Kyoto"
            className="col-span-3 h-full w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 lg:hidden">This component is optimized for desktop and meant as a visual preview.</p>
    </section>
  );
}
