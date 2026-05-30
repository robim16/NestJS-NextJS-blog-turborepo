try {
    console.log(require.resolve('@prisma/client'))
} catch (e) {
    console.error('ERROR:', e && e.message)
    process.exit(1)
}
