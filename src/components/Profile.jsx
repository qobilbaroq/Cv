import { Card, Dropdown } from "flowbite-react";
import pp from '../assets/image.jpg'

const Profile = () => {
  return (
    <Card className="max-w-full m-3">
      <div className="flex justify-between px-4 pt-4 flex-wrap">

      <div className="flex flex-col items-center pb-10">
        <img
          alt="image"
          height="96"
          src={pp}
          width="96"
          className="mb-3 rounded-full shadow-lg font"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Moch Nabil Al Mubaroql</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">sofwear enign</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
        </div>
      </div>

        <div inline className="column">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> Moch Nabil Al Mubaroq</h5>
          <h2>Phone +62 8517-3224-546</h2>
          <h5>Email nabilmughamad89@gmail.com </h5>
          <h5>Github: https://github.com/qobilbaroq</h5>
        </div>

      </div>
      
    </Card>
  )
}

export default Profile