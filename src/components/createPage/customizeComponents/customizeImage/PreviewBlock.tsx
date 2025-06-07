interface Props {
    blockCount: number,
    handleClick: (value: number) => void,
}

export const PreviewBlock = ({blockCount, handleClick}: Props) => {
    return (
        <div className="preview" onClick={() => handleClick(blockCount)}>
            <div className="preview-row">
                {Array.from({length: blockCount}).map((_, index) => (
                    <div className='preview-block' key={index} />
                ))}
            </div>
            <span>{blockCount} фото</span>
        </div>
    )
}