import { toSlug } from "../lib/utils";

const serviceList = [
  {
    title: "Key Programming",
    description: "Program smart keys, remote fobs, and transponder keys for quick vehicle access.",
    timeRange: "30-90 minutes",
    symptoms: ["Lost all keys", "Remote not responding", "Immobilizer key mismatch"],
    whatWeDo: ["Vehicle scan and key data read", "Secure key pairing", "Start and lock/unlock verification"],
    category: "Keys/Immobilizer"
  },
  {
    title: "ECU Coding",
    description: "Code and adapt replacement ECUs, modules, and software parameters.",
    timeRange: "45-120 minutes",
    symptoms: ["New ECU installed", "Engine light after module replacement", "Configuration mismatch faults"],
    whatWeDo: ["Read existing coding", "Apply manufacturer-compatible coding", "Run adaptation procedures"],
    category: "ECU/Modules"
  },
  {
    title: "Injector Coding",
    description: "Calibrate and code injectors for stable idle, efficiency, and power.",
    timeRange: "40-90 minutes",
    symptoms: ["Rough idle", "Poor fuel economy", "Injector replacement complete"],
    whatWeDo: ["Capture correction values", "Program ECU injector data", "Live data confirmation test"],
    category: "Injectors"
  },
  {
    title: "Error Codes Clearing",
    description: "Diagnose and clear DTCs after faults are fixed, with report and advice.",
    timeRange: "20-45 minutes",
    symptoms: ["Check engine light", "ABS warning", "Airbag warning lamp"],
    whatWeDo: ["Full module scan", "Fault root-cause guidance", "Safe code reset and re-scan"],
    category: "Diagnostics"
  },
  {
    title: "Fault Finding",
    description: "Advanced diagnostics for electrical, ECU communication, and drivability issues.",
    timeRange: "60-180 minutes",
    symptoms: ["Intermittent starting issues", "Random warning lights", "Power loss or stalling"],
    whatWeDo: ["Systematic diagnostics", "Wiring and sensor checks", "Actionable repair report"],
    category: "Diagnostics"
  },
  {
    title: "Immobilizer Repair",
    description: "Repair immobilizer synchronization and anti-theft communication problems.",
    timeRange: "60-150 minutes",
    symptoms: ["Car cranks but does not start", "Immobilizer light flashing", "ECU-key sync error"],
    whatWeDo: ["Immobilizer diagnostics", "Pairing restoration", "System revalidation"],
    category: "Keys/Immobilizer"
  },
  {
    title: "Battery Registration",
    description: "Register new battery data for smart charging systems.",
    timeRange: "20-40 minutes",
    symptoms: ["Battery replaced", "Start-stop not working", "Charging system alert"],
    whatWeDo: ["Read charging module data", "Register battery specs", "Verify charging profile"],
    category: "Programming"
  },
  {
    title: "Module Reset & Adaptation",
    description: "Reset and adapt throttle, steering, transmission, and other modules.",
    timeRange: "30-75 minutes",
    symptoms: ["Harsh shifting", "Idle fluctuation", "Post-repair calibration needed"],
    whatWeDo: ["Run guided resets", "Apply adaptation values", "Road-test validation"],
    category: "ECU/Modules"
  },
  {
    title: "Electrical Diagnostics",
    description: "Pinpoint wiring faults, short circuits, and sensor reference issues.",
    timeRange: "60-180 minutes",
    symptoms: ["Blown fuses", "No communication faults", "Sensor voltage anomalies"],
    whatWeDo: ["Circuit tracing", "Load and continuity tests", "Repair recommendations"],
    category: "Electrical"
  }
];

export const services = serviceList.map((service) => ({
  ...service,
  slug: toSlug(service.title)
}));

export const serviceCategories = {
  Diagnostics: ["Fault Finding", "Error Codes Clearing", "Pre-purchase Diagnostics", "ABS Diagnostics", "Airbag Diagnostics", "Live Data Analysis", "Freeze Frame Review"],
  "ECU/Modules": ["ECU Coding", "Module Reset & Adaptation", "Body Control Module Coding", "Transmission Control Module Coding", "ECU Cloning", "Firmware Updates", "Coding Verification"],
  "Keys/Immobilizer": ["Key Programming", "All Keys Lost Recovery", "Immobilizer Repair", "Remote Key Pairing", "Transponder Key Setup", "Spare Key Creation", "Key Shell Replacement"],
  Injectors: ["Injector Coding", "Injector Balance Check", "Injector Leak-off Analysis", "Common Rail Calibration", "Injector Quantity Learning", "Post-repair Validation"],
  Programming: ["Battery Registration", "Service Interval Reset", "TPMS Programming", "Throttle Relearn", "Steering Angle Sensor Calibration", "DPF Regeneration Control"],
  Electrical: ["Electrical Diagnostics", "CAN Bus Troubleshooting", "Grounding Fault Checks", "Starter Circuit Checks", "Charging System Diagnostics", "Sensor Reference Repair"]
};

export const serviceOptions = [...services.map((service) => service.title), "Other"];