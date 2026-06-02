import {
  Plane,
  Ship,
  Building2,
  Landmark,
  MapPinned,
} from "lucide-react";

const exportRegions = [
  {
    region: "North America",
    ports: "NY • LA • Houston",
    icon: Plane,
  },
  {
    region: "Europe / UK",
    ports: "London • Hamburg • Rotterdam",
    icon: Landmark,
  },
  {
    region: "Middle East",
    ports: "Dubai • Doha • Riyadh",
    icon: Building2,
  },
  {
    region: "Canada",
    ports: "Toronto • Vancouver",
    icon: MapPinned,
  },
  {
    region: "Asia Pacific",
    ports: "Singapore • Tokyo • Sydney",
    icon: Ship,
  },
];

export default function Location() {
  return (
    <section className="py-24 bg-[#FAF8F4]">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#0A2342]">
            Supporting Global{" "}
            <span className="text-[#D4AF37]">Export Channels</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {exportRegions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-[28px]
                  p-8
                  border
                  border-[#D4AF37]/10
                  hover:border-[#D4AF37]/40
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  text-center
                  shadow-sm
                "
              >
                <div
                  className="
                    w-20
                    h-20
                    mx-auto
                    rounded-2xl
                    bg-[#D4AF37]/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-[#D4AF37]
                    transition-all
                  "
                >
                  <Icon
                    size={36}
                    className="
                      text-[#D4AF37]
                      group-hover:text-white
                      transition-all
                    "
                  />
                </div>

                <h3 className="text-xl font-serif text-[#0A2342] mb-3">
                  {item.region}
                </h3>

                <p className="text-xs uppercase tracking-[0.25em] text-[#0A2342]/50">
                  {item.ports}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}