import { IUserData } from "../types/user-types";

export function downloadCV(href: string, user: IUserData[]) {
    console.log(href)
    const personalData = user.find(i => 'firstName' in i)
    if(user.length === 0 && (personalData?.firstName === '' && personalData?.email === '' && personalData?.surname === '')) {
        console.log('where is the items ay txa')
    }
}