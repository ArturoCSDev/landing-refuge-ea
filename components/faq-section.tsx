import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuáles son los requisitos para adoptar?",
    answer:
      "Debes ser mayor de edad, presentar una identificación oficial, comprobante de domicilio y firmar un compromiso de adopción responsable. También realizamos una breve entrevista y, en algunos casos, una visita domiciliaria.",
  },
  {
    question: "¿Los perritos están vacunados y esterilizados?",
    answer:
      "Sí, todos nuestros perritos cuentan con su cuadro de vacunas completo y desparasitación al día. La mayoría ya están esterilizados, y los que aún no lo están incluyen un vale de esterilización gratuita.",
  },
  {
    question: "¿Tiene algún costo la adopción?",
    answer:
      "La adopción tiene una cuota de recuperación simbólica que cubre parte de los gastos veterinarios (vacunas, desparasitación y esterilización). Este aporte nos ayuda a seguir rescatando más perritos.",
  },
  {
    question: "¿Puedo adoptar si vivo en departamento?",
    answer:
      "¡Por supuesto! Muchos de nuestros perritos se adaptan perfectamente a la vida en departamento. Te ayudaremos a encontrar al compañero ideal según tu espacio y estilo de vida.",
  },
  {
    question: "¿Qué pasa después de la adopción?",
    answer:
      "Realizamos seguimiento post-adopción durante los primeros meses para asegurarnos de que tanto tú como tu nuevo amigo se están adaptando bien. Además, ofrecemos asesoría gratuita sobre cuidados y comportamiento.",
  },
  {
    question: "¿Puedo ser voluntario sin adoptar?",
    answer:
      "¡Claro que sí! Siempre necesitamos voluntarios para paseos, eventos, hogares temporales y apoyo en el albergue. Contáctanos y te diremos cómo puedes ayudar.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-ea-light py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-ea-secondary">
            Resolvemos tus dudas
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ea-primary sm:text-3xl md:text-4xl">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-8 sm:mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-ea-accent"
              >
                <AccordionTrigger className="text-left text-ea-text hover:text-ea-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ea-text/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
