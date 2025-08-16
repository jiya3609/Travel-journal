import React from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
const App = () => {
  return (
    <>
    <Header/>
    <Entry
    img="https://scrimba.com/links/travel-journal-japan-image-url"
    country="Japan"
    info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    place="Mount Fuji"
    map_link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
    />
    <Entry
    img="https://scrimba.com/links/travel-journal-australia-image-url"
    country="Australia"
    info="The Sydney Opera House, opened in 1973, is one of the most recognizable and photographed buildings in the world. It is situated on Bennelong Point, overlooking the stunning Sydney Harbour, and is a UNESCO World Heritage site. The design, created by Danish architect Jørn Utzon, features a series of gleaming white, sail-shaped shells that form the roof structure, making it a symbol of modern architecture."
    place="Sydney Opera House"
    map_link="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
    />
    <Entry
    img="https://scrimba.com/links/travel-journal-norway-image-url"
    country="Norway"
    info="The fjord is one of Norway's most visited tourist sites. In 2005, it was listed as a UNESCO World Heritage Site, jointly with the Nærøyfjorden as the West Norwegian Fjords site. This status was challenged by the disputed plans to build power lines across the fjord"
    place="Geirangerfjord"
    map_link="https://www.google.com/maps/place/Geirangerfjord/@62.1048242,6.9922378,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
    />
    
    
    </>
  )
}

export default App

