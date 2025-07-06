export function getMockedDeviceData() {
  const now = Date.now();

  return [
    {
      deviceId: "GPS-001",
      runnerName: "Alice Johnson",
      battery: 82,
      isOnline: true,
      location: {
        lat: 40.7128,
        lng: -74.0060,
        timestamp: now,
      },
      startTime: now - 10 * 60 * 1000,
      endTime: null, // Still running
    },
    {
      deviceId: "GPS-002",
      runnerName: "Bob Smith",
      battery: 77,
      isOnline: true,
      location: {
        lat: 40.7138,
        lng: -74.0050,
        timestamp: now,
      },
      startTime: now - 15 * 60 * 1000,
      endTime: now - 2 * 60 * 1000, // Finished
    },
  ];
}
