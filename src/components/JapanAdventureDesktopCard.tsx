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
    <section className="mx-auto w-full max-w-[1420px] px-5 py-5 lg:px-7">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold lg:text-5xl leading-none tracking-tight text-slate-900">Japan Adventure</h1>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {tags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-1.5 text-sm lg:text-[15px] font-semibold text-teal-900 shadow-sm"
              >
                <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-teal-700" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-5 text-xl font-semibold text-slate-800 lg:text-[26px]">
            {details.map(({ icon: Icon, label, underlined }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-slate-700" />
                <span className={underlined ? "underline decoration-2 underline-offset-4" : ""}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-[280px] pt-1 text-right">
          <p className="text-xl text-slate-700">
            From <span className="text-4xl font-extrabold lg:text-5xl text-slate-900">€1,999</span> EUR
          </p>
          <button
            type="button"
            className="mt-3 rounded-full bg-[#FFA171] px-7 py-3 text-lg font-bold text-slate-900 transition hover:brightness-95"
          >
            Check available start dates
          </button>
        </div>
      </div>

      <div className="mx-auto w-full overflow-hidden rounded-[24px] md:w-[92%] lg:w-[88%] xl:w-[86%]">
        <div className="grid h-[460px] grid-cols-12 grid-rows-2 gap-1 bg-white lg:h-[500px] xl:h-[530px]">
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
