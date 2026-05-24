/**
 * One-shot Nominatim enrichment for src/data/*.json.
 *
 * Usage: `npm run geocode`
 *
 * Reads foodBanks.json and publicShowers.json. For each entry missing `coords`,
 * queries Nominatim (1 req/sec) and writes coords back into the file.
 * Run manually when new entries are added; commit the resulting JSON.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '..', 'src', 'data');

interface Entry {
  id: number;
  address: string;
  coords?: { lat: number; lng: number };
}

const USER_AGENT = 'low-income-seattle/1.0 (https://github.com/manuelmesson/low-income-seattle)';
const RATE_LIMIT_MS = 1100;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function geocodeOne(address: string): Promise<{ lat: number; lng: number } | null> {
  const url = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('format', 'json');
  url.searchParams.set('limit', '1');
  url.searchParams.set('q', address);
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`Nominatim ${res.status} for "${address}"`);
  const rows = (await res.json()) as Array<{ lat: string; lon: string }>;
  if (!rows[0]) return null;
  return { lat: parseFloat(rows[0].lat), lng: parseFloat(rows[0].lon) };
}

async function enrichFile(filename: string): Promise<void> {
  const filePath = path.join(DATA_DIR, filename);
  const raw = await fs.readFile(filePath, 'utf8');
  const entries = JSON.parse(raw) as Entry[];
  let changed = false;

  for (const entry of entries) {
    if (entry.coords) continue;
    try {
      const coords = await geocodeOne(entry.address);
      if (coords) {
        entry.coords = coords;
        changed = true;
        console.log(`  [${entry.id}] ${entry.address} -> ${coords.lat}, ${coords.lng}`);
      } else {
        console.warn(`  [${entry.id}] ${entry.address} -> NO MATCH`);
      }
    } catch (err) {
      console.error(`  [${entry.id}] ${entry.address} -> ${(err as Error).message}`);
    }
    await sleep(RATE_LIMIT_MS);
  }

  if (changed) {
    await fs.writeFile(filePath, JSON.stringify(entries, null, 2) + '\n', 'utf8');
    console.log(`  wrote ${filename}`);
  } else {
    console.log(`  no changes for ${filename}`);
  }
}

async function main(): Promise<void> {
  for (const file of ['foodBanks.json', 'publicShowers.json']) {
    console.log(`Enriching ${file}...`);
    await enrichFile(file);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
