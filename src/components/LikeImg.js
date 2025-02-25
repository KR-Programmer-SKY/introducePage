export const LikeImg = ({img, imgExplanation}) => {
  return (
    <div>
      <h3>좋아하는 사진</h3>
      <p>{imgExplanation}</p>
      <div><img src={img} alt="내가 좋아하는 이미지" width="350px" /></div>
    </div>
  )
}