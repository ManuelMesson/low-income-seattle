import { describe, expect, it } from 'vitest';
import en from './en.json';
import es from './es.json';

type JSONValue = string | number | boolean | null | { [k: string]: JSONValue } | JSONValue[];

function flatten(obj: JSONValue, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  if (obj === null || typeof obj !== 'object') {
    if (typeof obj === 'string') out[prefix] = obj;
    return out;
  }
  if (Array.isArray(obj)) return out;
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    Object.assign(out, flatten(v as JSONValue, key));
  }
  return out;
}

describe('i18n', () => {
  const flatEn = flatten(en as unknown as JSONValue);
  const flatEs = flatten(es as unknown as JSONValue);
  const keysEn = Object.keys(flatEn);
  const keysEs = Object.keys(flatEs);

  it('has the same set of keys in English and Spanish', () => {
    const missingInEs = keysEn.filter((k) => !(k in flatEs));
    const missingInEn = keysEs.filter((k) => !(k in flatEn));
    expect(missingInEs).toEqual([]);
    expect(missingInEn).toEqual([]);
  });

  it('has non-empty values', () => {
    const emptyEn = keysEn.filter((k) => !flatEn[k]);
    const emptyEs = keysEs.filter((k) => !flatEs[k]);
    expect(emptyEn).toEqual([]);
    expect(emptyEs).toEqual([]);
  });
});
