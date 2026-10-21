/** Homepage fields have no relationships to populate. Resolve preview messages
 * locally instead of making a population request to the CMS on every keystroke.
 * Saving still goes through Payload's authenticated server API. */
export async function homepagePreviewRequest({
  data,
}: {
  data: Record<string, unknown>;
}): Promise<Response> {
  const incoming = data.data;
  return Response.json(
    incoming && typeof incoming === "object" ? incoming : {},
  );
}
