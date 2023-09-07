import Image from "next/image";

type EmptyProps = {
  label: string;
};

export const Empty = ({ label }: EmptyProps) => (
  <div className="h-full p-20 flex flex-col justify-center items-center">
    <div className="relative h-72 w-72">
      <Image src="/empty.png" fill alt="empty" />
    </div>
    <p className="text-muted-foreground text-sm text-center">{label}</p>
  </div>
);
