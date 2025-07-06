import { useEffect, useState } from "react";
import axios from "axios";
import type { RunnerData, Device } from "./types";
import { downloadRaceResults } from "./utils/fileDownload";

function App() {
  const [runners, setRunners] = useState<RunnerData[]>([]);
  const [raceStarted, setRaceStarted] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/devices").then((res) => {
      setRunners(
        res.data.map((d: Device) => ({
          deviceId: d.devEUI,
          runnerName: d.runnerId,
          battery: d.battery,
          isOnline: true,
          location: {
            lat: d.latitude,
            lng: d.longitude,
            timestamp: d.lastSeen,
          },
          startTime: Date.now() - 60 * 60 * 1000, // optional default
          endTime: null,
        }))
      );
    });
  }, []);

 const handleStartStopRace = () => {
  const now = Date.now();

  if (!raceStarted) {
    // 🟢 Start the race
    setRaceStarted(true);
    setRunners((prev) =>
      prev.map((r) => ({
        ...r,
        startTime: now,
        endTime: null,
      }))
    );
  } else {
    // 🛑 Stop the race
    setRaceStarted(false);

    const updated = runners.map((r) => ({
      ...r,
      endTime: r.endTime || now,
    }));

    setRunners(updated);

    // 🛎️ Show confirmation before downloading
    const shouldDownload = window.confirm(
      "Do you want to download the race results as a CSV file?"
    );

    if (shouldDownload) {
      downloadRaceResults(updated);
    }
  }
};


  return (
    <div style={{ padding: 20 }}>
      <h1>🏃 Marathon Tracker</h1>
      <button onClick={handleStartStopRace}>
        {raceStarted ? "🛑 Stop Race" : "✅ Start Race"}
      </button>

      <ul>
        {runners.map((r) => (
          <li key={r.deviceId} style={{ marginTop: 10 }}>
            <strong>{r.runnerName}</strong><br />
            Device: {r.deviceId} | Battery: {r.battery}% | Status:{" "}
            {r.isOnline ? "Online" : "Offline"}<br />
            Location: ({r.location.lat.toFixed(4)}, {r.location.lng.toFixed(4)})<br />
            Start: {r.startTime ? new Date(r.startTime).toLocaleTimeString() : "Not Started"}<br />
            End: {r.endTime ? new Date(r.endTime).toLocaleTimeString() : "Running..."}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
