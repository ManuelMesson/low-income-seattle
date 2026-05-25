import type { FoodBank, Shower } from '@/types/resources';
import foodBanksRaw from './foodBanks.json';
import publicShowersRaw from './publicShowers.json';

export const foodBanks: FoodBank[] = foodBanksRaw as FoodBank[];
export const publicShowers: Shower[] = publicShowersRaw as Shower[];
