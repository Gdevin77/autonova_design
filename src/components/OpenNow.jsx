import { useEffect, useState } from "react";

// Hours mirror businessHours in lib/constants.js (Harare time, CAT).
const hours = { Mon: [7, 18], Tue: [7, 18], Wed: [7, 18], Thu: [7, 18], Fri: [7, 18], Sat: [8, 16] };

const getStatus = () => {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Harare", weekday: "short", hour: "numeric", hour12: false }).formatToParts(new Date());
  const day = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value) % 24;
  const range = hours[day];
  if (range && hour >= range[0] && hour < range[1]) return { open: true, label: `Open now · closes ${range[1] > 12 ? range[1] - 12 : range[1]}:00 ${range[1] >= 12 ? "PM" : "AM"}` };
  return { open: false, label: "Closed · emergency call-outs available" };
};

const OpenNow = ({ light = false }) => {
  const [status, setStatus] = useState(getStatus);
  useEffect(() => {
    const t = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-medium ${light ? "text-slate-300" : "text-textMuted"}`} role="status">
      <span className={`h-2 w-2 rounded-full ${status.open ? "animate-pulse bg-green-400" : "bg-amber-400"}`} />
      {status.label}
    </span>
  );
};

export default OpenNow;
