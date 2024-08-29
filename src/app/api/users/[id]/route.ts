export async function GET(req: Request, context: {params: {id: string | undefined | null }}) {
  const { params: { id }} = context; 
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const response = await res.json();

    return  Response.json({
      users: response
    })

  } catch (e) {
    return  Response.json({
      error: e
    })
  }
}

