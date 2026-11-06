export async function purgeExpired(store, pageSize = 100) {
  while (true) {
    // Always read from the start: deleted rows no longer occupy positions.
    const page = await store.listExpired({ offset: 0, limit: pageSize });
    if (page.length === 0) return;
    const deleted = await store.deleteMany(page.map((row) => row.id));
    // Without this check, a delete that removes nothing loops forever.
    if (deleted === 0) throw new Error("purge made no progress");
  }
}
