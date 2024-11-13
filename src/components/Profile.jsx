import pp from '../assets/image.jpg';
import Button from './elements/button'



const Profile = () => {



  return (
    <div className="flex items-center justify-evenly h-screen gap-8 flex-wrap ">
      <div className="flex flex-col items-center text-center">
        <h5 className="mb-3 text-2xl md:text-3xl font-medium text-gray-800 dark:text-white">
          HI! I am
        </h5>
        <h5 className="mb-3 text-4xl md:text-5xl font-medium text-gray-900 dark:text-white">
          Moch Nabil Al Mubaroq
        </h5>
        <span className="text-lg md:text-xl  text-gray-500 dark:text-gray-400 max-w-md">
          I am a junior front-end developer and a student with limited experience in coding. 
          I want to deepen my knowledge and work as a front-end developer.
        </span>

      <div className='flex gap-10'>
        <Button classname="bg-slate-700 text-slate-50 hover:bg-slate-50 hover:text-slate-700">Download Cv</Button>
        <a href='#about'>
        <Button>Contant me</Button>
        </a>

      </div>

      </div>

      <img
        alt="image"
        src={pp}
        className="w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-3xl shadow-lg"
      />

     

    </div>
  );
};

export default Profile;

