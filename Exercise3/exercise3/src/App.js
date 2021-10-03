import logo from './logo.svg';
import './App.css';
import ProductComponent from './components/productComponent';
import Grid from '@mui/material/Grid';

function App() {

  const productsData=[
    {
      title: 'Apple Pencil (2nd Generation)',
      manifacturer: 'Apple',
      price: 0,
      regularPrice: 0,
      shipsToFinland: false,
      imageUrl:'productImages/Pen2ndgen.png',
      stars: 5,
      reviews: 40275,
      stock: '',
      amazonCertified: ''
    },
    {
      title: 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)',
      manifacturer: 'Seagate',
      price: 62.99,
      regularPrice: 0,
      shipsToFinland: true,
      imageUrl:'productImages/HDD.png',
      stars: 4.5,
      reviews: 155888,
      stock: '',
      amazonCertified: ''

    },
    {
      title: 'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable',
      manifacturer: 'Roku',
      price: 28.98,
      regularPrice: 39.99,
      shipsToFinland: true,
      imageUrl:'productImages/Rokuexpress.png',
      stars: 4.5,
      reviews: 6957,
      stock: '',
      amazonCertified: 'Works with Alexa'

    },
    {
      title: 'Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Roku Voice Remote with TV Controls',
      manifacturer: 'Roku',
      price: "39.00",
      regularPrice: 49.99,
      shipsToFinland: true,
      imageUrl:'productImages/Rokustreaming.png',
      stars: 4.5,
      reviews: 97811,
      stock: '',
      amazonCertified: 'Works with Alexa'

    },
    {
      title: 'Apple Pencil',
      manifacturer: 'Apple',
      price: 0,
      regularPrice: 0,
      shipsToFinland: false,
      imageUrl:'productImages/Pen.png',
      stars: 5,
      reviews: 79750,
      stock: '',
      amazonCertified: ''

    },
    {
      title: 'Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts,...',
      manifacturer: 'Logitech',
      price: 0,
      regularPrice: 0,
      shipsToFinland: false,
      imageUrl:'productImages/webcam.png',
      stars: 4.5,
      reviews: 5948,
      stock: '',
      amazonCertified: ''

    },
    {
      title: 'Sceptre E248W-19203R 24" Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018',
      manifacturer: 'Spectre',
      price: 139.97,
      regularPrice: 0,
      shipsToFinland: true,
      imageUrl:'productImages/monitor.png',
      stars: 4.5,
      reviews: 15028,
      stock: '',
      amazonCertified: ''
    },
    {
      title: 'TP-Link AC750 WiFi Extender (RE230), Covers Up to 1200 Sq.ft and 20 Devices, Dual Band WiFi Range Extender, WiFi Booster to Extend Range of WiFi Internet Connection, OneMesh Compatible',
      manifacturer: 'TP-Link',
      price: 26.99,
      regularPrice: 29.99,
      shipsToFinland: true,
      imageUrl:'productImages/tplink.png',
      stars: 4,
      reviews: 10906,
      stock: '',
      amazonCertified: ''

    },
    {
      title: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with...',
      manifacturer: 'Apple',
      price: 988.00,
      regularPrice: 0,
      shipsToFinland: true,
      imageUrl:'productImages/Macbook.png',
      stars: 5,
      reviews: 9534,
      stock: 'Only 18 left in stock - order soon.',
      amazonCertified: ''

    }
  ]

  return (
    <div className="notification">
      <Grid container spacing={20}>
    {
      productsData.map(element=><ProductComponent data ={element}/>)
    }           
    </Grid>
  </div>
  );
}

export default App;
