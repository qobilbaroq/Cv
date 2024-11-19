import imgDefaul from '../'

export const Image = (imgUrl) => {
  return (
    <img src={!!imgUrl ? imgUrl : imgDefaul}/>
  )
}
