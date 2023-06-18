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

  console.log(data, 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
  return new Response(json_response)
}

// import fs from 'fs'
// import path from 'path'

// const handler = (req, res) => {
//   if (req.method === 'POST') {
//     console.log(req.body)
//     const feedbackPath = path.join(process.cwd(), 'data', 'feedback.json')
//     const feedbackOldData = fs.readFileSync(feedbackPath)
//     const data = JSON.parse(feedbackOldData)
//     const addNewData = data.push(req.body)
//     fs.writeFileSync(feedbackPath, JSON.stringify(data))

//     return res
//       .status(200)
//       .json({ method: 'Post', message: 'done', data: req.body })
//   } else if (req.method === 'GET') {
//     return res.status(200).json({ method: 'GET' })
//   } else {
//     return res.status(200).json({ method: 'other' })
//   }
// }

// export default handler
