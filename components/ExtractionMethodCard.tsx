import { Card } from '@/components/ui/card';

interface ExtractionMethodCardProps {
  name: string;
  description: string;
  icon: string;
  onClick?: () => void;
  isSelected?: boolean;
  comingSoon?: boolean;
}

export default function ExtractionMethodCard({
  name,
  description,
  icon,
  onClick,
  isSelected,
  comingSoon,
}: ExtractionMethodCardProps) {
  return (
    <Card
      className={`p-4 flex items-start gap-4 ${isSelected ? 'border-2 border-black' : 'border-dashed'} ${onClick && 'cursor-pointer hover:border-black'}`}
      onClick={onClick}
    >
      <img src={icon} alt="extract text"></img>
      <div>
        <div className="flex justify-between">
          <h3 className="font-medium text-slate-900 mb-1">{name}</h3>{' '}
          {comingSoon && <p className="uppercase font-semibold text-slate-400">coming soon</p>}{' '}
        </div>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </Card>
  );
}
