try {
  await prisma.productCategory.delete({
    where: {
      id: opts.input.id,
    },
  })
  return true
} catch (error) {
  return error
}
