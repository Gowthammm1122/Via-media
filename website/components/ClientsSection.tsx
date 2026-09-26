import Image from "next/image";

const clientLogos = [
  { name: "Taggstar", src: "/logos/clients/taggstar.svg", width: 120, height: 32 },
  { name: "Adobe", src: "/logos/clients/adobe.svg", width: 110, height: 28 },
  { name: "Johnson & Johnson", src: "/logos/clients/jnj.svg", width: 130, height: 32 },
  { name: "GoDaddy", src: "/logos/clients/godaddy.svg", width: 120, height: 30 },
  { name: "Colgate", src: "/logos/clients/colgate.svg", width: 115, height: 28 },
  { name: "Dermalogica", src: "/logos/clients/dermalogica.svg", width: 130, height: 32 },
  { name: "Emirates", src: "/logos/clients/Emirates.svg", width: 120, height: 36 },
  { name: "Peerspot", src: "/logos/clients/peerspot.svg", width: 120, height: 28 },
  { name: "Onroute", src: "/logos/clients/onroute.svg", width: 110, height: 26 },
  { name: "Vortex", src: "/logos/clients/vortex.svg", width: 110, height: 28 },
  { name: "Neos", src: "/logos/clients/neos.svg", width: 100, height: 26 },
  { name: "CCC", src: "/logos/clients/ccc.svg", width: 100, height: 28 },
  { name: "BIG", src: "/logos/clients/big.svg", width: 100, height: 28 },
  { name: "Zahlmann", src: "/logos/clients/zahlmann.svg", width: 110, height: 28 },
  { name: "ACS", src: "/logos/clients/acs.svg", width: 100, height: 28 },
];

export default function ClientsSection() {
  return (
    <section className="mt-32 lg:mt-[236px] border-t border-neutral-200 pt-16 sm:pt-20 lg:pt-28 pb-28 sm:pb-36">
      {/* Top Header: Subdued Title (Left) + Statement (Right) */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-400 leading-[1.15] max-w-sm">
          Trusted by<br />the visionaries.
        </h2>

        <p className="text-xl sm:text-2xl lg:text-[26px] font-medium text-black leading-snug lg:leading-relaxed max-w-2xl">
          Over the last 15 years, we’ve had the opportunity to work with a dynamic range of clients, spanning from forward-thinking start-ups and scale-ups to Fortune 500 powerhouses.
        </p>
      </div>

      {/* Client Logos Grid (5 columns on desktop matching Figma) */}
      <div className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16 items-center justify-items-center">
        {clientLogos.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center w-full h-12 grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={client.src}
              alt={`${client.name} logo`}
              width={client.width}
              height={client.height}
              style={{ width: "auto", height: "auto" }}
              className="max-h-8 sm:max-h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
