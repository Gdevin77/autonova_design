import { cn } from "../../lib/utils";

const Card = ({ className = "", children }) => {
  return <div className={cn("rounded-xl border border-line bg-surface p-5 shadow-card", className)}>{children}</div>;
};

export default Card;