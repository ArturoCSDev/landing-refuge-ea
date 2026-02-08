import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  HeartIcon,
  ShieldCheckIcon,
  HomeIcon,
} from "lucide-react";

const benefits = [
  {
    icon: HeartIcon,
    title: "Salvas una vida",
    description: "Al adoptar, le das una segunda oportunidad a un ser que lo merece todo.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Salud garantizada",
    description: "Todos nuestros perritos están vacunados, desparasitados y con revisión veterinaria.",
  },
  {
    icon: HomeIcon,
    title: "Compañía incondicional",
    description: "Un perro rescatado agradece con amor infinito. Ganas un amigo para toda la vida.",
  },
];

const eventDetails = [
  {
    icon: CalendarIcon,
    label: "Fecha",
    value: "Hoy, Domingo 8 de Febrero, 2026",
  },
  {
    icon: ClockIcon,
    label: "Hora",
    value: "10:00 AM - 5:00 PM",
  },
  {
    icon: MapPinIcon,
    label: "Ubicación",
    value: "Parque Central, Av. Reforma #123",
  },
];

export function AboutEvent() {
  return (
    <section id="evento" className="bg-ea-light py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-ea-secondary">
            Sobre el evento
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ea-primary sm:text-4xl">
            Desfile de Adopción
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ea-text/80">
            Un día especial donde nuestros perritos rescatados desfilarán
            buscando la familia perfecta. Habrá actividades, música y mucho
            amor. ¡No te lo pierdas!
          </p>
        </div>

        {/* Event details cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {eventDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex items-center gap-4 rounded-xl border border-ea-accent bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-ea-primary/10">
                <detail.icon className="size-6 text-ea-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-ea-text/60">
                  {detail.label}
                </p>
                <p className="font-semibold text-ea-text">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-10 sm:mt-16">
          <h3 className="text-center text-xl font-bold text-ea-primary sm:text-2xl">
            ¿Por qué adoptar?
          </h3>
          <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-3 sm:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-ea-secondary/10 transition-colors group-hover:bg-ea-secondary/20">
                  <benefit.icon className="size-8 text-ea-secondary" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-ea-primary">
                  {benefit.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ea-text/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
