import formidable from 'formidable'

export default defineEventHandler(async (event) => {
  const { req } = event.node
  const form = formidable()
  const userId = event.context.auth?.user.id

  const responce = await new Promise((resolve, reject) => form.parse(req, (err, fields, files) => {
    if (err)
      reject(err)

    resolve({ fields, files })
  }))

  return {
    responce,
    userId,
  }
})
