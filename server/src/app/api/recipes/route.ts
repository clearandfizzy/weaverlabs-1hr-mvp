import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src/data/data.json');

function readData() {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
}

function writeData(data: any) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data.recipes);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = readData();
  const newRecipe = { ...body, id: `rec${Date.now()}` };
  data.recipes.push(newRecipe);
  writeData(data);
  return NextResponse.json(newRecipe);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const data = readData();
  data.recipes = data.recipes.filter((rec: any) => rec.id !== id);
  writeData(data);
  return NextResponse.json({ success: true });
}

