'use client';
import * as MaterialDesign from 'react-icons/fa';

interface CryptoIconProps {
  name: string;
}

function CryptoIcon({ name }: CryptoIconProps) {
  // fix the eslint error
  const IconComponent = MaterialDesign[name];

  return <IconComponent />;
}
export { CryptoIcon };
export type { CryptoIconProps };
