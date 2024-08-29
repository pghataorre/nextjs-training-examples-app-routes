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

export async function POST(req) {
  const res = await req.json();

  res.password = '**********';

  res.id = crypto.randomUUID();
  return Response.json(res, 
    {headers: 
      {
        "Content-Type": "application/json"
      }
    }
  );
}

