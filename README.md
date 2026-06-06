# ShowGa Room [中文版md]

[EN version ReadMe](#showga-room-en-version)

Threejs練習專案
ShowGa 3D Room，使用Blender建模，ThreeJs網頁渲染完成。
Low poly風格。
燈光效果完全由GPU著色器計算、燈光遮罩計算後修改場景貼圖而成，全專案無真實燈光計算呈現。
燈光、渲染、Draw Call優化，手機觀賞無效能障礙(手機不要太爛)

🎮 參觀我的房間：[https://showga-room.onrender.com](https://showga-room.onrender.com)

## 使用技術 (Tech Stack)

- 前端:
    - [React.js](https://github.com/facebook/react)
    - [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
    - [React Three Drei](https://github.com/pmndrs/drei)
    - [ThreeJs](https://github.com/mrdoob/three.js)
    - [Zustand](https://github.com/pmndrs/zustand)
    - [GSAP](https://github.com/greensock/GSAP)
    - [Leva](https://github.com/pmndrs/leva)

## 功能特色

- [3D環視房間](#3D環視房間)
    - 滑鼠左鍵 : 水平(Azimuth)、垂直(Polar angle)調整視角
    - 滑鼠右鍵 : 平移視角(Pan)
    - 滾輪 : 相機前後移動(Dolly)

    - 手機單指移動 : 水平(Azimuth)、垂直(Polar angle)調整視角
    - 手機雙指縮放 : 相機前後移動(Dolly)
    - 手機雙指移動 : 平移視角(Pan)

- [控制面板調整](#控制面板調整)
    - 日照光強度
    - RGB燈光顏色、強度
    - 視角聚焦物件
    - 全息投影物件變換

- [電影幕-連線西洋棋遊戲](#電影幕-連線西洋棋遊戲)
    - 控制面板聚焦Movie_Screen之後才可互動
    - 由另一個專案嵌入 : [西洋棋專案Github](https://github.com/ShowGa/Play-Chess)
    - 連接伺服器、創立房間、複製房間號碼、好友加入
    - 即時訊息、表情包功能

### 3D環視房間

![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature1_1.webp)
![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature1_2.webp)

### 控制面板調整

![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature2_3.webp)
![image](https://github.com/ShowGa/Pic-repository/blob/main/Room-Project-feature2_2.webp)

### 電影幕-連線西洋棋遊戲

![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature3_1.webp)

## 部署資訊

- 前端(ShowGa Room) : [Render部署服務](https://render.com)
- 前端(西洋棋前端) : [Render部署服務](https://render.com)
- 後端(西洋棋socket伺服器) : [Railway部署服務](https://railway.app)

## 致謝

特別感謝Bruno Simon Threejs課程：

- [Bruno Simon Threejs Course](https://threejs-journey.com)

---

# ShowGa Room [EN version]

[中文版 ReadMe](#ShowGa-Room-中文版md)

A Three.js practice project.
ShowGa 3D Room — modeled in Blender and rendered in the browser with Three.js.
Low poly style.
All lighting effects are computed purely via GPU shaders and light-mask baking onto scene textures — no real-time light calculations are used anywhere in the project.
Lighting, rendering, and Draw Call optimizations ensure smooth performance on mobile (as long as your phone isn't ancient).

🎮 Visit my room: [https://showga-room.onrender.com](https://showga-room.onrender.com)

## Tech Stack

- Frontend:
    - [React.js](https://github.com/facebook/react)
    - [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
    - [React Three Drei](https://github.com/pmndrs/drei)
    - [Three.js](https://github.com/mrdoob/three.js)
    - [Zustand](https://github.com/pmndrs/zustand)
    - [GSAP](https://github.com/greensock/GSAP)
    - [Leva](https://github.com/pmndrs/leva)

## Features

- [3D Room Navigation](#3D-Room-Navigation)
    - Left mouse button : Adjust horizontal (Azimuth) and vertical (Polar angle) view
    - Right mouse button : Pan the camera
    - Scroll wheel : Dolly camera in/out

    - Mobile single-finger drag : Adjust horizontal (Azimuth) and vertical (Polar angle) view
    - Mobile two-finger pinch : Dolly camera in/out
    - Mobile two-finger drag : Pan the camera

- [Control Panel](#Control-Panel)
    - Sunlight intensity
    - RGB light color and intensity
    - Focus camera on specific objects
    - Holographic projection object transform

- [Movie Screen — Online Chess Game](#Movie-Screen--Online-Chess-Game)
    - Requires focusing Movie_Screen via the control panel before interaction
    - Embedded from a separate project : [Chess Project Github](https://github.com/ShowGa/Play-Chess)
    - Connect to server, create a room, copy room code, invite friends
    - Real-time messaging and emoji features

### 3D Room Navigation

![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature1_1.webp)
![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature1_2.webp)

### Control Panel

![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature2_3.webp)
![image](https://github.com/ShowGa/Pic-repository/blob/main/Room-Project-feature2_2.webp)

### Movie Screen — Online Chess Game

![image](https://raw.githubusercontent.com/ShowGa/Pic-repository/refs/heads/main/Room-Project-feature3_1.webp)

## Deployment

- Frontend (ShowGa Room) : [Render](https://render.com)
- Frontend (Chess client) : [Render](https://render.com)
- Backend (Chess socket server) : [Railway](https://railway.app)

## Acknowledgements

Special thanks to Bruno Simon's Three.js course:

- [Bruno Simon Three.js Journey](https://threejs-journey.com)
