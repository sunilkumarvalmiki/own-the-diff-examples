// Ticket: "Delete every expired session."
export async function purgeExpired(store, pageSize = 100) {
  let offset = 0;
  while (true) {
    const page = await store.listExpired({ offset, limit: pageSize });
    if (page.length === 0) return;
    await store.deleteMany(page.map((row) => row.id));
    offset += pageSize;
  }
}
