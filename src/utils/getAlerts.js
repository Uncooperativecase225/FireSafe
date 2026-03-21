export function getAlerts(data) {
  if (!data) return [];

  const alerts = [];

  const { temperature, lpg, gas, fire } = data;

  // 🔥 1. FIRE SENSOR (absolute priority)
  if (fire === true) {
    return [
      {
        id: "fire",
        message: "🔥 FIRE DETECTED",
        level: "critical",
      },
    ];
  }

  // ⚠️ 2. HIGH TEMPERATURE
  if (temperature > 70) {
    alerts.push({
      id: "temp",
      message: "High Temperature",
      level: "warning",
    });
  }

  // ⚠️ 3. LPG LEAK
  if (lpg > 65) {
    alerts.push({
      id: "lpg",
      message: "Gas Leak Detected",
      level: "danger",
    });
  }

  // ⚠️ 4. COMBINED RISK (advanced logic)
  if (temperature > 75 && lpg > 70) {
    alerts.push({
      id: "risk",
      message: "High Fire Risk",
      level: "danger",
    });
  }

  return alerts;
}