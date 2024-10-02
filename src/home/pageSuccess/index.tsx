import ImageSuccess from '../../assets/pageSuccess.png'

export function PageSuccess() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-950 relative">
      <img src={ImageSuccess} alt="" className='h-full object-cover absolute z-0' />
      <div className='flex z-10 items-center justify-center'>
        <h1 className='text-white text-4xl font-extrabold'>Obrigado</h1>
      </div>
    </div>
  )
}