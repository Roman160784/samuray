export const requairedField = (value: any) => {
    if (value) return undefined
    return "Field is required"
}


export const maxLengthCreater = (maxLength: number) =>
    (value: any) => {
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined
    }