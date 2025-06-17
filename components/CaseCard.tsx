import { Card } from '@/components/ui/card';

interface CaseCard {
  id: string;
  description: string;
  industry: string;
  image: string;
}

interface CaseCardProps {
  card: CaseCard;
}

export default function CaseCard({ card }: CaseCardProps) {
  return (
    <Card
      key={card.id}
      className="min-w-[430px] max-w-sm snap-center shrink-0 p-6 bg-white border-0 rounded-2xl flex flex-col gap-6"
    >
      <div className="flex justify-between items-center">
        <img src={card.image} /> <p>{card.industry}</p>
      </div>
      <p className="text-slate-700">{card.description}</p>
    </Card>
  );
}
