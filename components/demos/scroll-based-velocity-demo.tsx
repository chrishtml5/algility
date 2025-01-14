import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Algility AI Studio"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-[#15803d] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
