import {ChangeEvent, useState} from "react";

interface LoadInputBlockProps {
    index: number;
    handleLoadFile: (image: File) => void;
}

export const LoadInputBlock = ({index, handleLoadFile}: LoadInputBlockProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoadImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];

        if (file && file.type.startsWith('image/')) {
            setIsLoaded(true);
            handleLoadFile(file);
        } else {
            alert('Трапилась помилка, спробуйте обрати саме зображення ще раз');
        }
    }

    return <div className='load-block'>
        <span>Фото {++index} - {isLoaded ? 'Завантажено' : 'Не завантажено'}</span>
        {!isLoaded && <label>
            <input type='file' accept='image/*' onChange={handleLoadImage}/>
        </label>}
    </div>
}