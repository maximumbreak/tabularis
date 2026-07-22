// Ordered to mirror a typical promotion pipeline (local dev → production).
export const ENVIRONMENT_PRESETS = [
  "local",
  "development",
  "testing",
  "staging",
  "uat",
  "production",
] as const;

export type EnvironmentPreset = (typeof ENVIRONMENT_PRESETS)[number];

const ENVIRONMENT_PRESET_LABELS: Record<EnvironmentPreset, string> = {
  local: "Local",
  development: "Development",
  testing: "Testing",
  staging: "Staging",
  uat: "UAT",
  production: "Production",
};

export const ENVIRONMENT_LABELS: Record<string, string> = {
  ...ENVIRONMENT_PRESET_LABELS,
  custom: "Custom…",
};

export function isEnvironmentPreset(value: string): value is EnvironmentPreset {
  return (ENVIRONMENT_PRESETS as readonly string[]).includes(value);
}

/**
 * Display label for a connection's environment value: presets get their
 * canonical casing (e.g. "uat" -> "UAT"); custom values are shown verbatim.
 */
export function environmentDisplayLabel(environment: string): string {
  return isEnvironmentPreset(environment)
    ? ENVIRONMENT_PRESET_LABELS[environment]
    : environment;
}
