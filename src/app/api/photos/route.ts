export async function GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const response = await res.json();

    return  Response.json({
      photos: response.splice(0, 15)
    })

  } catch (e) {
    return  Response.json({
      error: e
    })
  }
}

