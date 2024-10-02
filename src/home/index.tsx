import { Barbell, Calendar, Laptop } from 'phosphor-react'
import fit from '../assets/image-fitness.png'
import backImage from '../assets/back-image.jpg'
import GirlImage from '../assets/image-girl.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export function Home() {
  const pages = useNavigate()

  const [text, setText] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event:any){
    setText(event.target.value)
  }


  return (
    <div className="w-full bg-slate-950 flex flex-col items-center justify-center">
      <div className='flex flex-row items-center justify-center relative'>
        <img src={fit} alt="" className='w-full relative z-0' />
        <div className="w-[35%] h-[500px] flex flex-col  absolute z-10 top-[150px] left-[200px]">
          <div className='flex flex-row'>

            <Barbell className='rotate-45 text-purple-500' size={50} weight='fill' />

            <div className='flex flex-col items-start'>
              <h2 className='font-extralight text-gray-200 text-2xl -mb-3'>Malhando</h2>
              <h2 className='font-bold text-gray-50 text-2xl'>Em casa</h2>
            </div>
          </div>
          <h1 className='text-4xl text-purple-500 font-bold  sm:underline'>Conquiste o corpo dos seus sonhos sem sair de casa</h1>
          <p className='text-base text-gray-200 my-3'>Imersão de aulas gratuitas que te ensinara a elaborar um programa de treinos personalizado e eficiente, que pode ser feito na sua propria casae trará o corpo que sempre desejou.</p>

          <div className='flex flex-row shadow-2xl shadow-purple-500'>
            <input type="email" value={text} placeholder='Seu melhor e-mail' className='rounded-l-lg px-5 py-2 flex-1' onChange={handleChange}/>
            <button onClick={() => pages('/landingPageFitnessTest/success')} disabled={text===''} type='button' className='bg-purple-500 hover:bg-purple-400  active:scale-95 rounded-r-lg px-5 py-2 text-gray-100 font-bold'>Quero Assistir</button>
          </div>
          <p className='text-gray-300 text-xs flex flex-row items-center justify-center mt-3'>
            <Calendar size={16} color='#d1d5db' /> 01, 03 e 05 de março -
            <Laptop size={16} color='#d1d5db' className='ml-1' /> online e <strong className='ml-1'>gratuito</strong>
          </p>

        </div>
        <div className='w-[35%] h-[500px] bg-transparent'>
          {/* <img src={fit} alt="" className='object-cover size-full overflow-clip ' /> */}
        </div>
      </div>
      <div className='w-full h-[200px] -translate-y-[200px] flex items-center justify-center'>
        <div className='w-[250px] h-1 bg-purple-400 mx-8' />
        <h2 className='text-4xl text-gray-200 font-bold'>1, 3 e 5 de Março</h2>
        <div className='w-[250px] h-1 bg-purple-400 mx-8' />
      </div>
      <div className='w-full h-[900px] flex relative'>
        <img src={backImage} alt="" className='z-0 relative size-full -translate-y-[200px]' />
        <div className='bg-black/90 absolute bottom-0 z-10 size-full -translate-y-[200px]'>
          <div className='flex flex-col justify-center items-center gap-3 mt-5'>
            <span className='text-xs text-gray-200 mt-5'>Veja se é para voce:</span>
            <h2 className='text-2xl font-extrabold text-purple-500'>Para quem são as aulas?</h2>
            <div className='flex flex-row mx-auto gap-2'>
              <div className='flex flex-col items-start w-[200px] bg-slate-500'>
                <div className='size-12 mt-5 ml-5 mb-4 rounded-full bg-purple-400' />
                <h3 className='text-purple-600 text-2xl font-bold ml-5 mb-2'>Exemplo</h3>
                <p className='text-gray-200 text-start text-sm mx-5 mb-5'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores nesciunt doloribus laboriosam possimus soluta,
                </p>
              </div>
              <div className='flex flex-col items-start w-[200px] bg-slate-500'>
                <div className='size-12 mt-5 ml-5 mb-4 rounded-full bg-purple-400' />
                <h3 className='text-purple-600 text-2xl font-bold ml-5 mb-2'>Exemplo</h3>
                <p className='text-gray-200 text-start text-sm mx-5 mb-5'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores nesciunt doloribus laboriosam possimus soluta,
                </p>
              </div>
              <div className='flex flex-col items-start w-[200px] bg-slate-500'>
                <div className='size-12 mt-5 ml-5 mb-4 rounded-full bg-purple-400' />
                <h3 className='text-purple-600 text-2xl font-bold ml-5 mb-2'>Exemplo</h3>
                <p className='text-gray-200 text-start text-sm mx-5 mb-5'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores nesciunt doloribus laboriosam possimus soluta,
                </p>
              </div>
              <div className='flex flex-col items-start w-[200px] bg-slate-500'>
                <div className='size-12 mt-5 ml-5 mb-4 rounded-full bg-purple-400' />
                <h3 className='text-purple-600 text-2xl font-bold ml-5 mb-2'>Exemplo</h3>
                <p className='text-gray-200 text-start text-sm mx-5 mb-5'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores nesciunt doloribus laboriosam possimus soluta,
                </p>
              </div>
            </div>
            <div className='flex flex-row gap-12 justify-center items-center mt-10'>
              <img src={GirlImage} alt="" className='rounded-full size-[300px] border-[10px] border-purple-600 ' />
              <div className='w-[300px] h-[300px] '>
                <span className='text-xs text-gray-50 mt-5 translate-y-2'>Quem te ajudará?</span>
                <h2 className='text-2xl font-extrabold text-purple-500'>Aline Azevedo</h2>
                <p className='text-xs text-gray-300 mt-2 text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem numquam facere sed ipsum officiis obcaecati laudantium laborum minima, rerum, </p>
                <p className='text-xs text-gray-300 mt-2 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem ipsam nemo possimus molestias iste odit, natus aspernatur molestiae excepturi sit culpa! Ea cumque fugiat amet, sequi id at iste?</p>
                <p className='text-xs text-gray-300 mt-2 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem ipsam nemo possimus molestias iste odit, natus aspernatur molestiae excepturi sit culpa! Ea cumque fugiat amet, sequi id at iste?</p>
                <p className='text-xs text-gray-300 mt-2 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem ipsam nemo possimus molestias iste odit, natus aspernatur molestiae excepturi sit culpa! Ea cumque fugiat amet, sequi id at iste?</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}