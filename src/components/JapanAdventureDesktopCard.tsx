import {
  CalendarDays,
  MapPin,
  Rocket,
  Handshake,
  BadgeHelp,
  User,
} from "lucide-react";

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
    <section className="mx-auto w-full max-w-[1500px] px-5 py-6 lg:px-8">
      <div className="mb-5 flex items-start justify-between gap-5">
        <div>
          <h1 className="text-5xl font-extrabold lg:text-6xl leading-none tracking-tight text-slate-900">Japan Adventure</h1>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {tags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3.5 py-1.5 text-sm lg:text-base font-semibold text-teal-900 shadow-sm"
              >
                <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-teal-700" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-6 text-2xl font-semibold text-slate-800 lg:text-[30px]">
            {details.map(({ icon: Icon, label, underlined }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-slate-700" />
                <span className={underlined ? "underline decoration-2 underline-offset-4" : ""}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-[300px] pt-1 text-right">
          <p className="text-2xl text-slate-700">
            From <span className="text-5xl font-extrabold lg:text-6xl text-slate-900">€1,999</span> EUR
          </p>
          <button
            type="button"
            className="mt-4 rounded-full bg-[#FFA171] px-8 py-4 text-xl font-bold text-slate-900 transition hover:brightness-95"
          >
            Check available start dates
          </button>
        </div>
      </div>

      <div className="mx-auto w-full overflow-hidden rounded-[26px] lg:w-[92%] xl:w-[90%]">
        <div className="grid h-[580px] grid-cols-12 grid-rows-2 gap-1 bg-white xl:h-[620px]">
          <img src={japanDay01Group} alt="Tokyo metro platform" className="col-span-3 row-span-2 h-full w-full object-cover" />
          <img src={japanDay03Group} alt="Group by a river in Japan" className="col-span-5 h-full w-full object-cover" />
          <img src={japanTokyo} alt="Traveler in Tokyo at night" className="col-span-4 h-full w-full object-cover" />
          <img src={japanDay06Nara} alt="Travelers in Japanese street" className="col-span-3 h-full w-full object-cover" />
          <img src={japanTea} alt="Tea ceremony class" className="col-span-3 h-full w-full object-cover" />
          <img src={japanTorii} alt="Orange Torii gates in Kyoto" className="col-span-3 h-full w-full object-cover" />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 lg:hidden">
        This component is optimized for desktop and meant as a visual preview.
      </p>
    </section>
  );
}
