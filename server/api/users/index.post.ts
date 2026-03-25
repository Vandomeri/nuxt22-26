export default defineEventHandler(async (event) => {

    const body = await readBody<ServerUserBody>(event)


    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    })


    return newUser
})