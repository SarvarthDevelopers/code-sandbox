const CHIRPSTACK_API = "http://localhost:8080/api"; // This is just for understanding, replace with actual ChirpStack API URL

export async function fetchRealDeviceData(apiKey: string) {
  return await fetch(`${CHIRPSTACK_API}/devices`, {
    headers: {
      "Grpc-Metadata-Authorization": `Bearer ${apiKey}`,
    },
  }).then((res) => res.json());
}
