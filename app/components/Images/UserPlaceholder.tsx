import Image from 'next/image'

export const UserPlaceholder = () => {
  return (
    <Image
        src={'/Image/user/Placeholder.webp'}
        alt='userPlaceholder'
        width={100}
        height={100}
        className='w-full h-full'
    />
  )
}
