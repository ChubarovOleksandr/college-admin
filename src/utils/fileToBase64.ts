export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result)
            } else {
                reject(new Error('Помилка при зчитуванні файлу'))
            }
        }

        reader.onerror = () => {
            reject(reader.error)
        }

        reader.readAsDataURL(file)
    })
}
