import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    label: "Freshly Prepared",
    icon: "/icons/utensils.svg",
  },
  {
    label: "Support Local Business",
    icon: "/icons/utensils.svg",
  },
  {
    label: "Fast & Reliable Delivery",
    icon: "/icons/truck.svg",
  },
]

export default function Welcome() {
  return (
    <div className="px-5 py-8 md:px-14 md:py-7 lg:pl-23.5 bg-card md:bg-background">
      <div className="relative md:hidden w-full aspect-350/159 bg-[url(/auth/welcome-mobile.jpg)] bg-cover bg-center" />
      <div className="flex justify-end mt-5 mb-9 md:mb-20 lg:mb-42">
        <Button variant="ghost" asChild className="px-7.75 py-5">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
      <div className="px-2.5">
        <div className="flex flex-col justify-center items-center md:items-start gap-2.5 mb-9 md:mb-7.75">
          <Logo link={false} className="md:absolute md:top-14" />
          <h1 className="text-[2rem] leading-10 md:leading-10.5 font-bold md:mb-3.5">
            Your Authentic Taste of Nigeria
          </h1>
          <p className="regular md:mb-6.5">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-5">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2.75 bg-background rounded-md px-2.25 md:pl-0 py-1.5"
              >
                <div className="w-11 aspect-square bg-muted flex justify-center items-center rounded-[13px]">
                  <Image
                    src={feature.icon}
                    alt="Decorative"
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </div>
                <p className="para">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5 md:gap-7.75 md:mb-43.5">
          <Button asChild className="py-6">
            <Link href="/sign-in">Start Your Order</Link>
          </Button>
          <Button variant="ghost" asChild className="py-6">
            <Link href="/contact">Learn More About Us</Link>
          </Button>
        </div>
        <div className="hidden md:flex justify-center gap-4.25 small">
          <p>&copy; 2024 Chuks Kitchen.</p>
          <p className="flex gap-2.75 text-[#64B5F6] hover:underline">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/*
<section className="flex flex-col items-start px-6 py-12 md:py-24 max-w-7xl mx-auto">
  

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-lg bg-orange-100 flex items-center justify-center">
        <Utensils className="text-orange-600 size-6" />
      </div>
      <span className="font-medium text-slate-800">Freshly Prepared</span>
    </div>
  </div>

  <div className="mt-10 flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 rounded-xl">
      Start Your Order
    </Button>
    <Button variant="outline" size="lg" className="border-sky-500 text-sky-600 h-14 rounded-xl">
      Learn More About Us
    </Button>
  </div>
</section>
*/
