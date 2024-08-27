
interface IContext  {
  context: {
    params: {
      id: string | null | undefined;
    }
  }
}

export async function GET(req: Request, context: {params: {id: string | undefined | null }}) {
  const { params: { id }} = context; 
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const response = await res.json();

    return  Response.json({
      photos: response
    })

  } catch (e) {
    return  Response.json({
      error: e
    })
  }
}

