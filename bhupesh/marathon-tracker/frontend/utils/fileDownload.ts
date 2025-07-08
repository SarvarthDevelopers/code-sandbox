import type { RunnerData } from "../types";

// Format time in "June 19, 2025, 5:42:10 PM" style
function formatDate(timestamp: number | null): string {
  if (!timestamp) return "N/A";
  return new Date(timestamp).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "medium",
  });
}

// Format duration like "2 hours, 3 minutes, 10 seconds, 120 milliseconds"
function formatDuration(ms: number): string {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  ms %= 1000 * 60 * 60;
  const minutes = Math.floor(ms / (1000 * 60));
  ms %= 1000 * 60;
  const seconds = Math.floor(ms / 1000);
  const milliseconds = ms % 1000;

  const parts = [];
  if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
  if (seconds > 0) parts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);
  if (milliseconds > 0) parts.push(`${milliseconds} millisecond${milliseconds !== 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(", ") : "0 milliseconds";
}

export function downloadRaceResults(runners: RunnerData[]) {
  const header = ["Runner Name", "Device ID", "Start Time", "End Time", "Duration"];
  const rows = runners.map((r) => {
    const start = formatDate(r.startTime);
    const end = formatDate(r.endTime);
    const duration =
      r.startTime && r.endTime ? formatDuration(r.endTime - r.startTime) : "N/A";

    return [r.runnerName, r.deviceId, start, end, duration];
  });

  const csvContent = [header, ...rows].map((row) => row.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "race_results.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
