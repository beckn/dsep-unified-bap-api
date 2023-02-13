import { models as user } from '.'

export const getUserDetails = async (email: any) => {
    const data = await user.User.findOne({ email: email })
    return data
}