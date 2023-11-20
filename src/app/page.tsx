import { DreamyGradient } from "@/components";


export default function Home() {
  return (
    <main>
      <DreamyGradient
        size={{ height: '15rem', width: '15rem' }}
        color='green'
        position={{ top: '0%', left: '0%' }}
        blur={4}
      />
      <DreamyGradient
        size={{ height: '15rem', width: '15rem' }}
        color='yellow'
        position={{ top: '0', right: '0' }}
        blur={4}
        animate='true'
      />
      <DreamyGradient
        size={{ height: '30rem', width: '30rem' }}
        color='#F58A25'
        blur={4}
        position={{ top: '10%', left: '10%' }}
        borderRadius='50%'
      />
      <DreamyGradient
        size={{ height: '25rem', width: '25rem' }}
        color='linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'
        blur={4}
        position={{ top: '35%', right: '10%' }}
        borderRadius='50%'
      />
      <div className='container'>
        <DreamyGradient
          size={{ height: '10rem', width: '10rem' }}
          color='linear-gradient(180deg, #7D40FF 0%, #F58A25 100%, #7230FF 100%)'
          position={{ top: '100%', right: '100%' }}
          blur={2}
        />
        <DreamyGradient
          size={{ height: '30rem', width: '30rem' }}
          color='linear-gradient(180deg, #42DDFF 0%, rgba(17, 112, 255, 0.46) 100%)'
          blur={1.5}
          borderRadius='50%'
        />
        <DreamyGradient
          size={{ height: '15rem', width: '15rem' }}
          color='linear-gradient(180deg, #F22FB0 0%, #F58A25 100%, #7061A3 100%)'
          position={{ bottom: '100%', left: '60%' }}
          blur={4}
        />
        <h1>Dreamy Gradients</h1>
      </div>
      <DreamyGradient
        size={{ height: '15rem', width: '15rem' }}
        color='red'
        position={{ bottom: '0', left: '0' }}
        blur={4}
      />
      <DreamyGradient
        size={{ height: '15rem', width: '15rem' }}
        color='blue'
        position={{ bottom: '0', right: '0' }}
        blur={4}
      />
    </main>
  )
}
