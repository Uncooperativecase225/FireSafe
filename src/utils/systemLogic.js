export function computeSystemState(data) {
  const { temperature, lpg, fire } = data;

  let alarm = false;
  let sprinkler = false;
  let status = "normal";

  // 🔥 FIRE (highest priority)
  if (fire === true) {
    alarm = true;
    sprinkler = true;
    status = "fire";
    return { alarm, sprinkler, status };
  }

  // ⚠️ GAS LEAK
  if (lpg > 65) {
    alarm = true;
    sprinkler = false;
    status = "gas";
    return { alarm, sprinkler, status };
  }

  // ⚠️ HIGH TEMPERATURE
  if (temperature > 70) {
    alarm = true;
    sprinkler = false;
    status = "heat";
    return { alarm, sprinkler, status };
  }

  // ✅ SAFE STATE
  return {
    alarm: false,
    sprinkler: false,
    status: "safe",
  };
}