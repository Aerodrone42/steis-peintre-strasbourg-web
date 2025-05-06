
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Marie L.",
    location: "Strasbourg",
    text: "Excellent travail de ravalement sur notre maison. Équipe professionnelle, ponctuelle et soignée. Le résultat est impeccable et conforme à nos attentes.",
    rating: 5
  },
  {
    name: "Thomas G.",
    location: "Schiltigheim",
    text: "Je recommande vivement STEIS Ismaël pour vos travaux de peinture intérieure. Travail minutieux, respect des délais et tarifs compétitifs.",
    rating: 5
  },
  {
    name: "Sophie B.",
    location: "Illkirch-Graffenstaden",
    text: "Service rapide et de qualité pour le nettoyage de notre toiture. La différence est impressionnante ! Merci pour votre professionnalisme.",
    rating: 5
  },
  {
    name: "Philippe M.",
    location: "Haguenau",
    text: "Très satisfait du travail de crépi réalisé sur notre façade. Conseils pertinents, équipe à l'écoute et finitions soignées.",
    rating: 4
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Ce que nos clients disent</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          La satisfaction de nos clients est notre plus grande réussite. Découvrez leurs témoignages sur nos prestations.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col p-6">
                      <StarRating rating={testimonial.rating} />
                      <p className="mt-4 flex-grow italic text-gray-700">"{testimonial.text}"</p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-steis">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
