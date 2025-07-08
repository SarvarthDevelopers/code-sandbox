export interface RunnerData {
  deviceId: string;
  runnerName: string;
  battery: number;
  isOnline: boolean;
  location: {
    lat: number;
    lng: number;
    timestamp: number;
  };
  startTime: number | null;
  endTime: number | null;
}

export interface Device {
  devEUI: string;
  runnerId: string;
  latitude: number;
  longitude: number;
  lastSeen: number;
  battery: number;
}
