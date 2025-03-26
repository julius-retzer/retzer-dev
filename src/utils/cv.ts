import fs from 'fs';
import path from 'path';
import { type CVData } from '~/types/cv';

export const getCVData = (): CVData => {
  const filePath = path.join(process.cwd(), 'src', 'cv.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as CVData;
};
