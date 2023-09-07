import Image from "next/image";

export const Loader = () => (
  <div className="h-full flex flex-col gap-y-4 items-center justify-center">
    <div className="w-10 h-10 relative animate-spin">
      <Image alt="Loading" src="/logo.png" fill />
    </div>
    <p className="text-sm text-muted-foreground">
      Unveiling the Power of Wisdom...
    </p>
  </div>
);
