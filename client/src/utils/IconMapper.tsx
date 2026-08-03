import {
  Droplets,
  Wind,
  Cpu,
  Thermometer,
  Shield,
  Activity,
  Zap,
  Sun,
  Flame,
  ShieldAlert,
  Layers,
  TrendingUp,
  Smile,
} from "lucide-react";

interface IconMapperProps {
  name: string;
  className?: string;
}

export default function IconMapper({ name, className = "w-5 h-5 text-brand" }: IconMapperProps) {
  switch (name) {
    case "Droplets":
      return <Droplets className={className} />;
    case "Wind":
      return <Wind className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Thermometer":
      return <Thermometer className={className} />;
    case "Shield":
      return <Shield className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Smile":
      return <Smile className={className} />;
    default:
      return <Shield className={className} />;
  }
}
