
const videoToolsDotImg = document.getElementsByClassName('video__tools_dot_img')
const videoToolsToolImg = document.getElementsByClassName('video__tools_tool_img')
const videoToolsImg = document.getElementsByClassName('main__video_tools_img')

for (let i = 0; i < videoToolsImg.length; i++) {
  videoToolsImg[i].addEventListener('click', () => {
    document.querySelector('.main__delete_video_container').style.display = 'flex'
  })
}

document.querySelector('.main__delete_video_btn_yes').addEventListener('click', () => {
  document.querySelector('.main__delete_video_container').style.display = 'none'
})
document.querySelector('.main__delete_video_btn_no').addEventListener('click', () => {
  document.querySelector('.main__delete_video_container').style.display = 'none'
})

for (let i = 0; i < videoToolsDotImg.length; i++) {
  let openTool = false
  
  videoToolsDotImg[i].addEventListener('click', () => {
    openTool = !openTool
  
    if (openTool) videoToolsToolImg[i].style.display = 'block'
    else videoToolsToolImg[i].style.display = 'none'

    videoToolsToolImg[i].addEventListener('click', () => {
      document.querySelector('.main__delete_video_container').style.display = 'flex'
    })

  })
}

const addVideoCard = document.querySelector('.main__add_video_card')

addVideoCard.addEventListener('click', () => {
  document.querySelector('.main__add_video_container').style.display = 'flex'

  document.querySelector('.main__add_video_img').addEventListener('click', () => {
    document.querySelector('.main__add_video_img').querySelector('input').click()
  })

  document.querySelector('.main__add_video_container').addEventListener('click', (e) => {
    if (!document.querySelector('.main__add_video').contains(e.target)) {
      document.querySelector('.main__add_video_container').style.display = 'none'
    }
  })
})