export async function GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await res.json();

    return  Response.json({
      users: response.splice(0, 15)
    })

  } catch (e) {
    return  Response.json({
      error: e
    })
  }
}

