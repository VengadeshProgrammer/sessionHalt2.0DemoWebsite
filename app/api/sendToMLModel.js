export async function sendToMLModel(fingerprint, accFingerprints) {
  try {
    const response = await fetch("http://192.168.1.8:5000/replace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fingerprint, accFingerprints })
    });

    const result = await response.json();
    console.log("ML Model Response:", result);
    return result;
  } catch (err) {
    console.error("Error contacting ML Model:", err);
    return { error: "ML server unreachable" };
  }
}
