import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPinIcon,
    label: "Dirección",
    value: "Av. Reforma #123, Col. Centro, Ciudad de México",
  },
  {
    icon: PhoneIcon,
    label: "Teléfono",
    value: "+52 (55) 1234-5678",
    href: "tel:+525512345678",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "adopciones@esperanzanimal.org",
    href: "mailto:adopciones@esperanzanimal.org",
  },
  {
    icon: ClockIcon,
    label: "Horario",
    value: "Lun - Sáb: 9:00 AM - 6:00 PM",
  },
];

const socialLinks = [
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://facebook.com/esperanzanimal",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://instagram.com/esperanzanimal",
  },
];

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-ea-primary to-ea-secondary py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-ea-accent">
              Contáctanos
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              ¿Listo para cambiar una vida?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Si estás interesado en adoptar a alguno de nuestros perritos o
              quieres saber más sobre cómo ayudar, no dudes en contactarnos.
              ¡Estamos para ayudarte!
            </p>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="outline"
                  size="icon-lg"
                  className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="size-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right: contact cards */}
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const content = (
                <div className="flex items-start gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/20">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ea-accent/20">
                    <item.icon className="size-5 text-ea-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ea-accent">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-white">{item.value}</p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                );
              }

              return <div key={item.label}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
