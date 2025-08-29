import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const timeFrameOptions = [
  { value: "5m", label: "5 Minutes" },
  { value: "15m", label: "15 Minutes" },
  { value: "1h", label: "1 Hour" },
  { value: "6h", label: "6 Hours" },
  { value: "24h", label: "24 Hours" }
];

interface TimeFrameControlProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const TimeFrameControl = ({ value, onValueChange }: TimeFrameControlProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[120px] h-9">
        <SelectValue placeholder="Time Frame" />
      </SelectTrigger>
      <SelectContent>
        {timeFrameOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};