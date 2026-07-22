import { describe, it, expect } from 'vitest';
import {
  ENVIRONMENT_PRESETS,
  ENVIRONMENT_LABELS,
  isEnvironmentPreset,
  environmentDisplayLabel,
} from '../../src/utils/environments';

describe('environments', () => {
  describe('isEnvironmentPreset', () => {
    it('recognizes every preset', () => {
      for (const preset of ENVIRONMENT_PRESETS) {
        expect(isEnvironmentPreset(preset)).toBe(true);
      }
    });

    it('rejects a custom value', () => {
      expect(isEnvironmentPreset('sandbox')).toBe(false);
    });

    it('rejects the "custom" sentinel itself', () => {
      expect(isEnvironmentPreset('custom')).toBe(false);
    });
  });

  describe('environmentDisplayLabel', () => {
    it('returns canonical casing for presets', () => {
      expect(environmentDisplayLabel('uat')).toBe('UAT');
      expect(environmentDisplayLabel('production')).toBe('Production');
    });

    it('returns custom values verbatim', () => {
      expect(environmentDisplayLabel('sandbox')).toBe('sandbox');
      expect(environmentDisplayLabel('QA-2')).toBe('QA-2');
    });
  });

  describe('ENVIRONMENT_LABELS', () => {
    it('has a label for every preset plus "custom"', () => {
      for (const preset of ENVIRONMENT_PRESETS) {
        expect(ENVIRONMENT_LABELS[preset]).toBeTruthy();
      }
      expect(ENVIRONMENT_LABELS.custom).toBeTruthy();
    });
  });
});
