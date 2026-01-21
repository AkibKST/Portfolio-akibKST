import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Suspense } from "react";
import { ContactScene } from "@/components/3D/ContactScene";
import { Canvas3D } from "@/components/3D/Canvas3D";
import "@/styles/animations.css";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const ContactSection = ({
  //   title = "Contact Us", used raw title in h1
  description = "Get in touch with me for any inquiries or collaborations.",
  emailLabel = "Email",
  emailDescription = "I respond to all emails within 24 hours.",
  email = "akibkst22@gmail.com",
  officeLabel = "Location",
  officeDescription = "Based in Bangladesh.",
  officeAddress = "Kushtia town, kushtia khulna bangladesh",
  phoneLabel = "Phone",
  phoneDescription = "Available for urgent calls.",
  phone = "01533039625",
  chatLabel = "Social",
  chatDescription = "Connect with me on social media.",
  chatLink = "My Profiles",
}: Contact7Props) => {
  return (
    <section className="bg-background py-24 px-8">
      <div className="mx-auto container">
        <div className="mb-14 animate-fade-up transition-all duration-500">
          <h1 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl transition-all duration-500">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg transition-all duration-500">
            {description}
          </p>
        </div>

        {/* 3D Animation with Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Left: 3D Scene */}
          <div className="hidden lg:flex justify-center items-start">
            <Canvas3D height="h-96 w-80">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <div className="animate-spin">Loading...</div>
                  </div>
                }
              >
                <ContactScene />
              </Suspense>
            </Canvas3D>
          </div>

          {/* Right: Contact Cards Grid */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              <div
                className="bg-muted rounded-lg p-6 animate-fade-up transition-all duration-500 hover:shadow-lg hover:scale-105 hover:bg-muted/80 cursor-pointer"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-auto transition-transform duration-300" />
                </span>
                <p className="mb-2 text-lg font-semibold transition-all duration-300">
                  {emailLabel}
                </p>
                <p className="text-muted-foreground mb-3 transition-all duration-300">
                  {emailDescription}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="font-semibold hover:underline transition-all duration-300 hover:text-primary"
                >
                  {email}
                </a>
              </div>
              <div
                className="bg-muted rounded-lg p-6 animate-fade-up transition-all duration-500 hover:shadow-lg hover:scale-105 hover:bg-muted/80 cursor-pointer"
                style={{ animationDelay: "0.15s" }}
              >
                <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-auto transition-transform duration-300" />
                </span>
                <p className="mb-2 text-lg font-semibold transition-all duration-300">
                  {officeLabel}
                </p>
                <p className="text-muted-foreground mb-3 transition-all duration-300">
                  {officeDescription}
                </p>
                <a
                  href="#"
                  className="font-semibold hover:underline transition-all duration-300 hover:text-primary"
                >
                  {officeAddress}
                </a>
              </div>
              <div
                className="bg-muted rounded-lg p-6 animate-fade-up transition-all duration-500 hover:shadow-lg hover:scale-105 hover:bg-muted/80 cursor-pointer"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-auto transition-transform duration-300" />
                </span>
                <p className="mb-2 text-lg font-semibold transition-all duration-300">
                  {phoneLabel}
                </p>
                <p className="text-muted-foreground mb-3 transition-all duration-300">
                  {phoneDescription}
                </p>
                <a
                  href={`tel:${phone}`}
                  className="font-semibold hover:underline transition-all duration-300 hover:text-primary"
                >
                  {phone}
                </a>
              </div>
              <div
                className="bg-muted rounded-lg p-6 animate-fade-up transition-all duration-500 hover:shadow-lg hover:scale-105 hover:bg-muted/80 cursor-pointer"
                style={{ animationDelay: "0.25s" }}
              >
                <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                  <MessageCircle className="h-6 w-auto transition-transform duration-300" />
                </span>
                <p className="mb-2 text-lg font-semibold transition-all duration-300">
                  {chatLabel}
                </p>
                <p className="text-muted-foreground mb-3 transition-all duration-300">
                  {chatDescription}
                </p>
                <a
                  href="#"
                  className="font-semibold hover:underline transition-all duration-300 hover:text-primary"
                >
                  {chatLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
