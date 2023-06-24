import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'
export async function GET(request) {
  const url = path.join(__dirname,"db.json")
  const dataBuffer = fs.readFileSync("./db.json", 'utf8')
  console.log('🚀 ~ file: route.js:4 ~ GET ~ dataBuffer:', dataBuffer)
  const data = JSON.parse(dataBuffer)
  let json_response = {
    status: 'success',
    results: data.length,
    data,
  }
  return NextResponse.json(json_response)
}
