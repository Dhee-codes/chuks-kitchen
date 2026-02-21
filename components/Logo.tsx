import Image from "next/image";
import Link from "next/link";

export const Logo = ({
  className,
  link = true,
}: {
  className?: string;
  link?: boolean;
}) => {
  const logoImg = (
    <Image
      src="/logo.svg"
      alt="Chuks Kitchen logo"
      width={183}
      height={41}
      priority
      className={className}
    />
  );

  return link ? <Link href="/">{logoImg}</Link> : logoImg;
};