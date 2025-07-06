import express from "express";
import cors from "cors";
import { getMockedDeviceData } from "./chirpstackMock";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// In-memory mock device list
let devices = [
  {
    devEUI: "0004A30B001C0530",
    runnerId: "runner_1",
    latitude: 0,
    longitude: 0,
    lastSeen: 0,
    battery: 100,
  },
   {
    devEUI: "0004A30B001C0531",
    runnerId: "runner_2",
    latitude: 1,
    longitude: 1,
    lastSeen: 1,
    battery: 99,
  }
];

// Root route for confirmation
app.get("/", (req, res) => {
  res.send("Mock ChirpStack API is running!");
});

// GET /devices → return mock devices
app.get("/devices", (req, res) => {
  res.json(devices);
});

// POST /uplink → simulate device sending data
app.post("/uplink", (req, res) => {
  const { devEUI, latitude, longitude, timestamp, battery } = req.body;
  const device = devices.find((d) => d.devEUI === devEUI);
  if (device) {
    device.latitude = latitude;
    device.longitude = longitude;
    device.lastSeen = timestamp;
    device.battery = battery;
    res.json({ status: "updated", device });
  } else {
    res.status(404).json({ error: "Device not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Mock ChirpStack API running on http://localhost:${PORT}`);
});
