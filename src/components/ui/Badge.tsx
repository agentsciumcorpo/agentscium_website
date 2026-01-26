interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'habanero' | 'aster-blue' | 'jodhpur-tan' | 'deep-space';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  className = ''
}: BadgeProps) {
  const variants = {
    'primary': 'bg-[#F98513]/10 text-[#F98513]',
    'secondary': 'bg-[#9BACD8]/20 text-[#223382]',
    'outline': 'bg-transparent border border-[#223382]/30 text-[#223382]',
    'habanero': 'bg-[#F98513]/10 text-[#F98513]',
    'aster-blue': 'bg-[#9BACD8]/20 text-[#223382]',
    'jodhpur-tan': 'bg-[#9AD1C8]/20 text-[#111144]',
    'deep-space': 'bg-[#223382]/10 text-[#223382]'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
