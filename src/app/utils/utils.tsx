import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
interface LinkProps {
  children: ReactNode;
  href: string;
}

interface NextImageProps {
  height: number;
  width: number;
  alt: string;
  src: string;
  style?: React.CSSProperties;
}

export const NextLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link style={{ textDecoration: 'none' }} href={props.href} target="_blank">
      {children}
    </Link>
  );
};

export const NextImage = ({ ...props }: NextImageProps) => {
  return (
    <Image
      alt={props.alt}
      src={props.src}
      height={props.height}
      width={props.width}
      style={props.style}
      quality={100}
    />
  );
};
