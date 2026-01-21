import { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TestimonialScene } from "@/components/3D/TestimonialScene";
import { Canvas3D } from "@/components/3D/Canvas3D";

interface Testimonial10Props {
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const TestimonialSection = ({
  quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  author = {
    name: "Customer Name",
    role: "Role",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
}: Testimonial10Props) => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - 3D Animation */}
          <div className="hidden lg:flex justify-center items-center">
            <Canvas3D height="h-96">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <div className="animate-spin">Loading...</div>
                  </div>
                }
              >
                <TestimonialScene />
              </Suspense>
            </Canvas3D>
          </div>

          {/* Right side - Testimonial Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
            <p className="mb-8 max-w-2xl font-medium lg:text-xl">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="flex items-center gap-2 md:gap-4">
              <Avatar className="size-12 md:size-16">
                <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
                <AvatarFallback>{author.name}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium md:text-base">
                  {author.name}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {author.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };
