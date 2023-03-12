export const useCropName = (name: string | null) => {
    if(name !== null)
    return name.split(' ').map(function (item: string) { 
        return item[0] 
    }).join('')
}

