import fs from 'fs'
export async function GET(request) {
  const dataBuffer = fs.readFileSync('./src/db.json', 'utf8')
  console.log('🚀 ~ file: route.js:4 ~ GET ~ dataBuffer:', dataBuffer)
  const data = JSON.parse(dataBuffer)
  let json_response = {
    status: 'success',
    results: data.length,
    data,
  }
  return new Response(json_response)
}
