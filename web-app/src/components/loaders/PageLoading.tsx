
const PageLoading = () => {
    return (
        <div className='fixed z-50 top-0 w-full h-full'>
            <div className='flex items-center justify-center w-full h-full bg-white/80'>
                <div className='w-16 h-16 border-8 border-blue-600 border-dashed rounded-full animate-spin'></div>
            </div>
        </div>
    )
}

export default PageLoading