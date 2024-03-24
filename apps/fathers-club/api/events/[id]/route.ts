export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  //If we are not using request parameter then rename to _request
  return Response.json({ id: id });
}
export const runtime = 'edge';
