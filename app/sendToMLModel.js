export async function sendToMLModel(fingerprint) {
  try {
    const response = await fetch("https://sessionhalt2-0-s-ml.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fingerprint })
    });

    const result = await response.json();
    console.log("ML Model Response:", result);
    return result;
  } catch (err) {
    console.error("Error contacting ML Model:", err);
    return { error: "ML server unreachable" };
  }
}
